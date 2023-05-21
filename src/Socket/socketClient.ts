import * as socketio from "socket.io";

export class SocketClient {
  static io: any = null;
  static app: any;

  constructor() {}

  static initiateSocketClient() {
    if (!SocketClient.io) {
      SocketClient.io = new socketio.Server(SocketClient.app);
      return SocketClient.io;
    }
  }
  on() {
    return SocketClient.io.on;
  }
}
