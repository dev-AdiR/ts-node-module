"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
class Socket {
    constructor(socket) {
        this.socket = null;
        this.socket = socket;
    }
    sendMessage(event, message) {
        this.socket.emit(event, message);
    }
}
exports.Socket = Socket;
