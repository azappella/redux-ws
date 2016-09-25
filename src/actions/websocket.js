import constants from 'constants/constants';

const websocketActionCreators = {
  connecting(status) {
    return { type: constants.SOCKET_IO_CONNECTING, status };
  },
  connect(status) {
    return { type: constants.SOCKET_IO_CONNECT, status };
  },
  disconnect(status) {
    return { type: constants.SOCKET_IO_DISCONNECT, status };
  },
  connected(status) {
    return { type: constants.SOCKET_IO_CONNECTED, status };
  },
  disconnected(status) {
    return { type: constants.SOCKET_IO_DISCONNECTED, status };
  },
  emit(channel, payload) {
    return { type: constants.SOCKET_IO_EMIT, channel, payload };
  }
};

export default websocketActionCreators;