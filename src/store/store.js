import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const INITIAL_STATE = {};
const reduxLogger = createLogger({ predicate: () => __DEV__ });

const enhancer = compose(
  applyMiddleware(
    reduxLogger,
  ),
);

export default createStore(rootReducer, INITIAL_STATE, enhancer);
