import types from 'constants/constants';
import actions from 'actions/actions';
import io from 'socket.io-client';

const socket = io();

const socketware = (() => {

  const onConnect = (socket, store) => {
    store.dispatch( actions.ws.connected() );
  };
  const onDisconnect = (socket, store) => {
    store.dispatch( actions.ws.disconnected() );
  };
  const onDeposit = (payload, socket, store) => {
    store.dispatch( actions.bank.depositIntoAccount(payload) );
  };
  const onWithdraw = (payload, socket, store) => {
    store.dispatch( actions.bank.withdrawFromAccount(payload) );
  };

  return store => next => action => {
    
    switch(action.type) {
      case types.SOCKET_IO_CONNECT:
        store.dispatch( actions.ws.connecting() );
        socket.on('connect', () => {
          onConnect(socket, store);
        });
        socket.on('disconnect', () => {
          onDisconnect(socket, store)
        });
        socket.on('deposit', (payload) => {
          console.log('User deposits:', payload);
          onDeposit(payload, socket, store);
        });
        socket.on('withdraw', (payload) => {
          console.log('User withdraws:', payload);
          onWithdraw(payload, socket, store);
        });
        break;
      case types.SOCKET_IO_EMIT:
        socket.emit(action.channel, action.payload);
      default:
        return next(action);
    }
    return next(action);
  }

})();

export default socketware;