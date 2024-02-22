// const express = require('express');
// const app = express();
// const http = require('http');
// const cors = require('cors');
// const {Server}= require('socket.io');

// app.use(cors());

// const server = http.createServer(app);


// const io = new Server(server, {
//     cors: {
//         origin: 'http://localhost:5173',
//         // methods: ['GET', 'Post', 'Put', 'Delete']
//     }
// });




// const port = process.env.PORT || 8000;

// io.on("connection", (socket) => {
//     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
// });




// server.listen(port, () => {
//     console.log(`app is running on Port ${port}`);
// })

// server.js

import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        // methods: ['GET', 'Post', 'Put', 'Delete']
    }
});

const port = process.env.PORT || 8000;

io.on("connection", (socket) => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

server.listen(port, () => {
    console.log(`app is running on Port ${port}`);
});
