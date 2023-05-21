"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketClient = void 0;
const socketio = require("socket.io");
class SocketClient {
    constructor() { }
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
SocketClient.io = null;
exports.SocketClient = SocketClient;
