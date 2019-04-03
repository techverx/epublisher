import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';

import {
  renderApollo,
  cleanup,
  waitForElement,
} from '../../test-utils';

describe('Articles Page', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders articles', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: { query: GET_ARTICLES },
        result: {
          data: {
            articles: {
              cursor: '123',
              hasMore: true,
              launches: [mockArticles],
            },
          },
        },
      },
    ];
    const { getByText } = await renderApollo(<Articles />, {
      mocks,
      cache,
    });
    await waitForElement(() => getByText(/test mission/i));
  });
});
