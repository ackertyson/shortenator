import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import './App.css';
import reducer from './reducer';
import { watchAddUrl, watchFetchUrls } from './components/url/sagas';
import { Url } from './components/url';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAddUrl);
sagaMiddleware.run(watchFetchUrls);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Url}/>
          <Route path="/urls" component={Url}/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
