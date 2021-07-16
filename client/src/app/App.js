import React, { useEffect, useState } from 'react'
import WaitingRoom from './menu/WaitingRoom'
import Name from './menu/Name'
import Rooms from './menu/Rooms'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient(process.env.REACT_APP_ENDPOINT)

function App(props) {
  const [game, setGame] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [playerID] = useState(0)
  const [roomID, setRoomID] = useState(0)
  const [roomName, setRoomName] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected)

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true)
    })
    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  })

  useEffect(() => {

  })

  if (isConnected) {
    const light = document.getElementById('light')
    light.style.backgroundColor = '#EB4236'
  } else {
    const light = document.getElementById('light')
    light.style.backgroundColor = 'black'
  }

  if (!playerName) {
    return (<Name socket={socket.volatile} set={setPlayerName} />)
  }
  if (game) {
    const player = {
      name: playerName,
      id: playerID
    }
    const room = {
      id: roomID,
      name: roomName,
    }

    return (
      <WaitingRoom
        socket={socket.volatile}
        continue={setGame}
        player={player}
        room={room}
      />)
  }

  return (
    <Rooms
      setGame={setGame}
      setRoomID={setRoomID}
      setRoomName={setRoomName}
      socket={socket.volatile}
    />
  )
}

export default App