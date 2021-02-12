import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ThunkMiddleware from "redux-thunk";
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers'

const logger = createLogger()

const rootReducer = combineReducers({ searchRobots, requestRobots })

const store = createStore( rootReducer, applyMiddleware(ThunkMiddleware, logger) )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
