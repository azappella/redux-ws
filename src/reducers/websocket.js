import constants from 'constants/constants';

const initialState = {
  status: constants.SOCKET_IO_DISCONNECTED,
  channel: null,
  payload: null,
};

const wsReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.SOCKET_IO_CONNECTING:
      return { status: constants.SOCKET_IO_CONNECTING };
    case constants.SOCKET_IO_CONNECT:
      return { status: constants.SOCKET_IO_CONNECT };
    case constants.SOCKET_IO_CONNECTED:
      return { status: constants.SOCKET_IO_CONNECTED };
    case constants.SOCKET_IO_DISCONNECT:
      return { status: constants.SOCKET_IO_DISCONNECT };
    case constants.SOCKET_IO_DISCONNECTED:
      return { status: constants.SOCKET_IO_DISCONNECTED };
    case constants.SOCKET_IO_EMIT:
      return { status: state.status, channel: action.channel, payload: action.payload };
    default:
      return state;
  }
};

export default wsReducer;