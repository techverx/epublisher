import React from 'react';
import ReactDOM from 'react-dom';

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from 'react-apollo';

import Pages from './pages';
import {resolvers, typeDefs} from './resolvers';
import injectStyles from './styles';

// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: process.env.API_BASEPATH,
  }),
  resolvers,
  typeDefs,
});

cache.writeData({
  data: {},
});

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages /> 
  </ApolloProvider>,
  document.getElementById('root'),
);
