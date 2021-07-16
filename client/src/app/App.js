import React, { useEffect, useState } from 'react'
import WaitingRoom from './menu/WaitingRoom'
import Name from './menu/Name'
import Rooms from './menu/Rooms'

function App(props) {
  const [game, setGame] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [playerID] = useState(0)
  const [roomID, setRoomID] = useState(0)
  const [roomName, setRoomName] = useState('')
  const [isConnected, setIsConnected] = useState(props.socket.connected)

  useEffect(() => {
    props.socket.on('connect', () => {
      setIsConnected(true)
    })
    props.socket.on('disconnect', () => {
      setIsConnected(false)
    })

    return () => {
      props.socket.off('connect')
      props.socket.off('disconnect')
    }
  })

  if (isConnected) {
    const light = document.getElementById('light')
    light.style.backgroundColor = '#EB4236'
  } else {
    const light = document.getElementById('light')
    light.style.backgroundColor = 'black'
  }

  if (!playerName) {
    return (<Name socket={props.socket} set={setPlayerName} />)
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
        socket={props.socket}
        setGame={setGame}
        player={player}
        room={room}
      />
    )
  }

  return (
    <Rooms
      setGame={setGame}
      setRoomID={setRoomID}
      setRoomName={setRoomName}
      socket={props.socket}
    />
  )
}

export default App