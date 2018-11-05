import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import profileReducer from "./reducers/profileReducer";
import statementReducer from "./reducers/statementReducer";
import purchaseReducer from "./reducers/purchaseReducer";

const combinedReducers = combineReducers({
  profile: profileReducer,
  statement: statementReducer,
  purchase: purchaseReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedMiddlewares = composeEnhancers(
  applyMiddleware(promiseMiddleware())
);

const store = createStore(combinedReducers, combinedMiddlewares);

export default store;
