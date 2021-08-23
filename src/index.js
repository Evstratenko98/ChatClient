import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSaga from "redux-saga";

import { rootReducer } from "./redux/reducers/rootReducer";
import { sagaWatcher } from "./redux/sagas/saga";

const saga = createSaga();
const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(sagaWatcher);

const app = (
   <Provider store={store}>
      <App />
   </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
