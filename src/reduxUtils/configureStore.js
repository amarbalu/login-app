import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import initialState from "./initialState";
import rootSaga from "./saga";
/**
 * ConfigureStore helps us to Store formation using Redux
 */
const saga = createSagaMiddleware();

const enhancers = [];
const middleware = [saga];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(reducer, initialState, composedEnhancers);
saga.run(rootSaga);
export default store;
