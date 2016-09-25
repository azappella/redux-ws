import { combineReducers } from 'redux';
import bank from 'reducers/bank';
import ws from 'reducers/websocket';

export default combineReducers({ 
  bank,
  ws
});