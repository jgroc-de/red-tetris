import React, { useEffect, useState } from 'react'
import getInitValues from '../library/data/init/getInitValues'
import WaitingRoom from './menu/WaitingRoom'
import Name from './menu/Name'
import Rooms from './menu/Rooms'
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://127.0.0.1:3001';
const socket = socketIOClient(ENDPOINT);

function App(props) {
  const [game, setGame] = useState(getInitValues('game'))
  const [playerName, setPlayerName] = useState(getInitValues('playerName'))
  const [playerID] = useState(getInitValues('playerID'))
  const [roomID, setRoomID] = useState(getInitValues('roomID'))
  const [roomName, setRoomName] = useState(getInitValues('roomName'))
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });
    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  })

  useEffect(() => {

  });

  const player = {
    name: playerName,
    id: playerID
  }
  const room = {
    id: roomID,
    name: roomName,
  }

  if (isConnected) {
    const light = document.getElementById('light');
    light.style.backgroundColor = '#EB4236'
  } else {
    const light = document.getElementById('light');
    light.style.backgroundColor = 'black'
  }

  if (game) {
    return (
      <WaitingRoom
        socket={socket.volatile}
        continue={setGame}
        player={player}
        room={room}
      />)
  }
  if (!playerName) {
    return (<Name socket={socket.volatile} set={setPlayerName} />)
  }

  return (
    <Rooms setGame={setGame}
      setRoomID={setRoomID}
      setRoomName={setRoomName}
      socket={socket.volatile}
    />
  )
}

export default App