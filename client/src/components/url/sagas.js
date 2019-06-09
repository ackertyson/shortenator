import { call, put, takeEvery } from 'redux-saga/effects';
const apiHost = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const urlMask = /^https?:\/\/[-_.a-zA-Z0-9]+\.[-_.a-zA-Z0-9]+/;

const Api = {
  addUrl: async (url) => {
    if (!urlMask.test(url)) throw new Error('Bad URL format');

    const request = new Request(
      `${apiHost}/urls`,
      {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    return fetch(request)
      .then(res => res.json());
  },

  fetchUrls: async () => {
    const request = new Request(
      `${apiHost}/urls`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    return fetch(request)
      .then(res => res.json());
  }
};

function* addUrl(action) {
   try {
      const record = yield call(Api.addUrl, action.url);
      yield put({ type: "ADD_URL_SUCCESS", record });
   } catch (error) {
      yield put({ type: "ADD_URL_FAILURE", error: error });
   }
}

function* fetchUrls(action) {
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
