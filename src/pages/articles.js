import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {  Loading } from '../components';
import { Tag } from 'antd';
import DataTable from '../components/table';
import ActionDelete from '../containers/action-button'


export const GET_ARTICLES = gql`
  query  articles($cursor: String){
    articles(first: 100,after: $cursor) {
      pageInfo {
      endCursor
      startCursor
      hasPreviousPage
      hasNextPage
      }
      edges {
        cursor
        node {
        id
        title
        description
        teaser
        tags{
          id
          name
          }
        }
      }
    }
  }
`;
const columns = [{
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  sorter: (a, b) => a.title.length - b.title.length,
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
  sorter: (a, b) => a.description - b.description,
}, {
  title: 'Teaser',
  dataIndex: 'teaser',
  key: 'teaser',
  sorter: (a, b) => a.teaser - b.teaser,
},
{
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.name.length > 5 ? 'geekblue' : 'green';
        return <Tag color={color} key={tag}>{tag.name.toUpperCase()}</Tag>;
      })}
    </span>
  ),
},
{
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <ActionDelete {...record} />
    </span>
  ),
}
];

function mapDataTable(items) {
  if (!items.length) return;
  const cloneItems = JSON.parse(JSON.stringify(items));
  cloneItems.map((item,i) => {
    item['key'] = i+1
    item['id'] = item.node.id
    item['title'] = item.node.title
    item['description'] = item.node.description
    item['teaser'] =  item.node.teaser
    item['tags'] = item.node.tags;
    return item;
  });

  return cloneItems;
}



export default function Articles() {

  return (
    <Query query={GET_ARTICLES}>
      {({  data: {articles }, loading, error, fetchMore ,client }) => {
        if (loading) return <Loading />;
        if (error) return <p>ERROR</p>;
        return (
          <Fragment>
            <DataTable columns={columns} data={mapDataTable(articles.edges)}/>
          </Fragment>
        );
      }}
    </Query>
  );
}
