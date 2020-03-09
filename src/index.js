import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { requestRobots, searchRobots } from './reducers'

import './index.css';

const logger = createLogger()

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
// STEPS
// Add npm redux packages | install redux-thunk
// import thunkMiddleware from redux-thunk in index.js
// constants.js create a constant  with the 3 states of the promise, so 3 constants
// import constants to actions.js and export const requestRobots  function woth dispatch, fetch, then, catch
// in the reducers.js import the actions we have as an object in actions.js
// export the const for the 3 promises in one functio using a switch statement  ( export const requestRobots() func...)
// create another initial state for requestRobots in reducers.js
// import the new reducers to index.js and add it into the store as well using combineReducers
// go to app.js and in mapStateToProps add the searchRobots because it was added with combineReducers


// now we are going to make use of the thunkMiddleware, it works to check if the actions return objects or functions
// in app.js we will update few things:
// 1. Update the state so now it includes the robots: state.requestRobots.searchRobots
// 2. isPending: state.requestRobots.isPending
// 3. error: state.requestRobots.error

// 4. mapDispatchToProps we will add onRequestRobots function
// 5. import requestRobots on top of the file from actions.js in app.js

// In app.js change the componentDidMount using props with onRequestRobots
// we can also get ird of the constructor becuase there is no state
// change the rendering and any instances on app.js that is still using the state
