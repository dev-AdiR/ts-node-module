export * from "./constants"
export * from "./Socket"


import * as http from "http"
import { SocketClient } from "./Socket"

const server = http.createServer().listen(3003)

SocketClient.app = server
SocketClient.io = SocketClient.initiateSocketClient()