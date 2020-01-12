import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers, { initialState } from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  initialState,
  applyMiddleware( ...middlewares )
);

export default store;
