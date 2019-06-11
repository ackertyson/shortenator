/* eslint-disable no-unused-vars, no-undef */
import { actions, actionTypes as types } from './index';

describe('Url actions', () => {
  describe('Fetch URLs', () => {
    test('fetchUrls', () => {
      const expectedAction = {
        type: types.FETCH_URLS
      };
      const result = actions.fetchUrls();
      expect(result).toHaveProperty('type', expectedAction.type);
    });

    test('fetchUrlsSuccess', () => {
      const records = [{ url: 'fake.com' }];
      const expectedAction = {
        type: types.FETCH_URLS_SUCCESS,
        records
      };
      const result = actions.fetchUrlsSuccess(records);
      expect(result).toHaveProperty('records', records);
      expect(result).toHaveProperty('type', expectedAction.type);
    });

    test('fetchUrlsFailure', () => {
      const error = {
        message: 'your email is dumb'
      };
      const expectedAction = {
        type: types.FETCH_URLS_FAILURE,
        error
      };
      const result = actions.fetchUrlsFailure(error);
      expect(result).toHaveProperty('error.message', 'your email is dumb');
      expect(result).toHaveProperty('type', expectedAction.type);
    });
  });
});
