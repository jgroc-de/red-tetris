function getPLayers(io, roomName) {
    let players = []
    let clients = io.sockets.adapter.rooms.get(roomName);
    console.log(new Date())
    console.log(roomName, clients)
    for (const clientId of clients) {
        const client = io.sockets.sockets.get(clientId);
        players.push({
            name: client.username,
            id: client.id,

        })
    }

    io.to(roomName).emit('players', players)
}

export default getPLayers