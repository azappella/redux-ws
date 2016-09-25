import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from 'reducers/index';
import logger from 'middleware/logger';
import socketware from 'middleware/socket-io';

export default createStore(
  reducer, 
  applyMiddleware(logger, socketware)
);
