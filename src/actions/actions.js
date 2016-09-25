import bankActionCreators from 'actions/bank.js';
import websocketActionCreators from 'actions/websocket.js';

export default {
    bank: bankActionCreators,
    ws: websocketActionCreators,
};