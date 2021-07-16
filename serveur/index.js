
import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
import getPLayers from './library/getPlayers.js'

const server = http.createServer(express())
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000']
    }
})

const MAX_PLAYER = 4

let registerRooms = []
let users = []

io.on('connection', (socket) => {
    socket.on('connect', () => {
        io.emit('user status', 'user connected')
    })
    socket.on('disconnect', () => {
        io.emit('user status', 'user disconnected')
    })
    socket.on('username', (msg) => {
        socket.username = msg
        users.push(socket.username)
    })
    socket.on('rooms-list', () => {
        console.log('test room')
    })
    socket.on('create-room', (roomName) => {
        if (!registerRooms.includes(roomName)) {
            registerRooms.push(roomName)
            socket.join(roomName)
            socket.emit('join-room', roomName)
        } else {
            socket.emit('error', 'room\'s name already exists!')
        }
    })
    socket.on('join-room', (roomName) => {
        if (true /* room not full */) {
            socket.join(roomName)
            socket.emit('join-room', roomName)
        } else {
            socket.emit('error', 'game is full!')
        }
    })
    socket.on('leave-room', (roomName) => {
        socket.leave(roomName)
    })
    socket.on('get-player-list', (roomName) => {
        getPLayers(io, roomName)
    })
    setInterval(function (registerRooms) {
        const rooms = []
        for (let name of registerRooms) {
            let clients = io.sockets.adapter.rooms.get(name)
            if (clients) {
                rooms.push({
                    name: name,
                    max: MAX_PLAYER,
                    players: clients.size,
                    id: 'lol'
                })
            }
        }
        io.emit('rooms-list', rooms)
    }, 2000, registerRooms)
})


server.listen(3001, () => {
    console.log('listening on *:3001')
})
