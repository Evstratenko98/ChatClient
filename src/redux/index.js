import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import rootSaga from "./saga";
import appReducer from "./store";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(appReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
