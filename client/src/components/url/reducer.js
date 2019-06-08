import * as types from './actionTypes';

const initialState = {
  errorMessage: null,
  records: []
};

export default function url(state = initialState, action) {
  switch (action.type) {
    case types.ADD_URL_SUCCESS:
      return {
        errorMessage: null,
        records: [
          action.record,
          ...state.records
        ]
      };

    case types.ADD_URL_FAILURE:
      return {
        errorMessage: action.error.message
      };

    case types.FETCH_URLS_SUCCESS:
      return {
        errorMessage: null,
        records: action.records
      };

    case types.FETCH_URLS_FAILURE:
      return {
        errorMessage: action.error.message
      };

    default:
      return state;
  }
}
