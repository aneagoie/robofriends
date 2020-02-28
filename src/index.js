import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import { searchRobots } from './reducers'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const store = createStore(searchRobots)

ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
// STEPS
// Add npm redux packages | install redux-thunk
// import thunkMiddleware from redux-thunk in index.js
// constants.js create a constant  with the 3 states of the promise, so 3 constants
// import constants to actions.js and export const requestRobots  function woth dispatch, fetch, then, catch 
