// const path = require('path');
// const http = require('http');
// const express = require('express');
// const socketIO =  require('socket.io');

import * as express from 'express'
import * as path from 'path';
import * as http from 'http';
import * as socketIO from 'socket.io'

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket:any)=>{
    socket.on('disconnect',()=>{
        console.log('disconnected')
    })
})

server.listen(port,()=>{
    console.log(`Service is up on port ${port}`)
})

