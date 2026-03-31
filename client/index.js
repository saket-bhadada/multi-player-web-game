import express from 'express';
import http, { Server } from 'http';
import { websocketServer } from 'websocket';
// const WebSocketServer = require('websocket').server;

let connection = null;

const app = express();
const httpserver = http.createServer((req,res)=>{
    console.log('request received');
});

const websocket = new websocketServer({    
    httpServer: httpserver
})