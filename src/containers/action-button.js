import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { GET_ARTICLES} from '../pages/articles';
import Button from '../components/button';

// export all queries used in this file for testing


export const DELETE_ARTICLE = gql`
mutation deleteArticle($id : ID!){
  deleteArticle(
    input:{
    id: $id
  }
    ){
    article {
      id
      title 
      description
      teaser
    }
    }
  }
`;

export default function ActionDelete(article) {
  return (
    <Mutation
      mutation={DELETE_ARTICLE}
      variables={{ id: article.node.id }}
      refetchQueries={[
         {
           query: GET_ARTICLES,
         },
       ]}
    >
      {(mutate, { loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>An error occurred</p>;

        return (
          <div>
            <Button
              data-testid="book-button"
            
              onClick={mutate}
            >
            delete
            </Button>
          </div>
        );
      }}
    </Mutation>
  );
}

