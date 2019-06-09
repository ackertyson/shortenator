import * as types from './actionTypes';

export const addUrl = url => ({ type: types.ADD_URL, url });
export const addUrlSuccess = record => ({ type: types.ADD_URL_SUCCESS, record });
export const addUrlFailure = error => ({ type: types.ADD_URL_FAILURE, error });

export const fetchUrls = () => ({ type: types.FETCH_URLS });
export const fetchUrlsSuccess = records => ({ type: types.FETCH_URLS_SUCCESS, records });
export const fetchUrlsFailure = error => ({ type: types.FETCH_URLS_FAILURE, error });

export const updateUrl = url => ({ type: types.UPDATE_URL, url });
