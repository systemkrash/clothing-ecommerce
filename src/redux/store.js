import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const composeEnhancers = composeWithDevTools({});

const middlewares = [logger];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;