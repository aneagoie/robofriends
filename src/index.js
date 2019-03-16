import React from "react";
import ReactDOM from "react-dom";
// wraps App and makes redux store available to children
import { Provider } from "react-redux";
// creates redux store and applys middleware, in this case, redux-logger
import { createStore, applyMiddleware, combineReducers } from "redux";
// middleware for better logging of redux activity
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { searchRobots, requestRobots } from "./reducers";
import "tachyons";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
