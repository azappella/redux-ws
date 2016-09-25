import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from 'reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import socketware from 'middleware/socket-io';

const initialState = {
  bank: {
    balance: 0,
  },
  ws: {
    status: null,
  }
};

export default createStore(
  rootReducer, 
  initialState,
  applyMiddleware(
    thunk,
    logger(),
    socketware
  )
);
