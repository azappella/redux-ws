import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from 'reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import socketware from 'middleware/socket-io';

const reduxLogger = logger();

export default createStore(
  reducer, 
  applyMiddleware(
    thunk,
    reduxLogger,
    socketware
  )
);
