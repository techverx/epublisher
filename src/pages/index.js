import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Articles from './articles';

import { Header, PageContainer } from '../components';

export default function Pages() {
  return (
    <Fragment>
      <Header />
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Articles path="/" />
        </Router>
      </PageContainer>
    </Fragment>
  );
}
