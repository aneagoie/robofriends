import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons'; 


const logger = createLogger();

//combine reducers to root reducer
const rootReducer = combineReducers({ searchRobots, requestRobots })

const store = 
    createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
