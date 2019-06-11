/* eslint-disable no-unused-vars, no-undef */
import sinon from 'sinon';
import { assert } from 'chai';
import { runSaga } from 'redux-saga';
import { addUrl, fetchUrls } from './sagas';
import { put, call } from 'redux-saga/effects';
import * as urlActions from './actions';
import * as actionTypes from './actionTypes';
import urlApi from './api';

describe('Url sagas', () => {
  test('addUrl success', async () => {
    const dispatched = [];
    const record = { id: 1234 };
    sinon.stub(urlApi, 'addUrl').callsFake(() => record);
    const url = 'http://url';
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ state: 'test' }),
    }, addUrl, { url }).toPromise();

    sinon.assert.calledWith(urlApi.addUrl, url);
    assert.deepInclude(dispatched, { type: actionTypes.ADD_URL_SUCCESS, record });
    urlApi.addUrl.restore();
  });

  test('addUrl failure', async () => {
    const dispatched = [];
    const error = { message: 'boom' };
    sinon.stub(urlApi, 'addUrl').rejects(error);
    const url = 'http://url';
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ state: 'test' }),
    }, addUrl, { url }).toPromise();

    sinon.assert.calledWith(urlApi.addUrl, url);
    assert.deepInclude(dispatched, { type: actionTypes.ADD_URL_FAILURE, error });
    urlApi.addUrl.restore();
  });

  test('fetchUrls', async () => {
    const dispatched = [];
    const error = { message: 'boom' };
    sinon.stub(urlApi, 'fetchUrls').rejects(error);
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ state: 'test' }),
    }, fetchUrls).toPromise();

    sinon.assert.calledOnce(urlApi.fetchUrls);
    assert.deepInclude(dispatched, { type: actionTypes.FETCH_URLS_FAILURE, error });
    urlApi.fetchUrls.restore();
  });
});
