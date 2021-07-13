function getPLayers(io, socket, roomName) {
    let players = []
    let clients = io.sockets.adapter.rooms.get(roomName);
    console.log(roomName, clients)
    for (const clientId of clients) {
        const client = io.sockets.sockets.get(clientId);
        players.push({
            name: client.username,
            id: client.id,

        })
    }

    socket.to(roomName).emit('players', players)
}

export default getPLayers