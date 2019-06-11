/* eslint-disable no-unused-vars, no-undef */
import * as types from './actionTypes';
import reducer from './reducer';

describe('Url reducer', () => {
  test('return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      errorMessage: null,
      records: [],
      url: ''
    });
  });

  test('handle fetch success', () => {
    expect(reducer({}, { type: types.FETCH_URLS_SUCCESS, records: 'yes' }))
      .toEqual({
        errorMessage: null,
        records: 'yes'
      });
  });

  test('handle fetch failure', () => {
    const action = {
      error: {
        message: 'my error'
      },
      type: types.FETCH_URLS_FAILURE
    };
    expect(reducer({}, action))
      .toEqual({
        errorMessage: 'my error'
      });
  });
});
