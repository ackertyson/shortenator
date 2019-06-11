import { call, put, takeEvery } from 'redux-saga/effects';
import Api from './api';

export function* addUrl(action) {
   try {
      const record = yield call(Api.addUrl, action.url);
      yield put({ type: "ADD_URL_SUCCESS", record });
   } catch (error) {
      yield put({ type: "ADD_URL_FAILURE", error: error });
   }
}

export function* fetchUrls(action) {
   try {
      const records = yield call(Api.fetchUrls);
      yield put({ type: "FETCH_URLS_SUCCESS", records });
   } catch (error) {
      yield put({ type: "FETCH_URLS_FAILURE", error: error });
   }
}

export function* watchAddUrl() {
  yield takeEvery("ADD_URL", addUrl);
}
export function* watchFetchUrls() {
  yield takeEvery("FETCH_URLS", fetchUrls);
}
