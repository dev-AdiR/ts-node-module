export class Socket {
  socket: any = null;
  constructor(socket: any) {
    this.socket = socket;
  }

  sendMessage(event: string, message: Object) {
    this.socket.emit(event, message);
  }
}
