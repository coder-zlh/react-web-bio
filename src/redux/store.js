import { createStore, applyMiddleware } from 'redux';

import promiseMiddleware from './middleware/promiseMiddleware';

import reducers from './reducers';

const store = createStore(reducers,applyMiddleware(promiseMiddleware));

export default store;
