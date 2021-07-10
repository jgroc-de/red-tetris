import React, { useState } from 'react'
import getInitValues from '../library/data/init/getInitValues'
import WaitingRoom from './menu/WaitingRoom'
import Name from './menu/Name'
import Rooms from './menu/Rooms'

/*
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:4001';
*/

/*
const [response, setResponse] = useState('')

useEffect(() => {
  const socket = socketIOClient(ENDPOINT);
  socket.on('FromAPI', data => {
    setResponse(data);
  });
}, []);
*/

function App(props) {
  const [game, setGame] = useState(getInitValues('game'))
  const [playerName, setPlayerName] = useState(getInitValues('playerName'))
  const [playerID] = useState(getInitValues('playerID'))
  const [roomID, setRoomID] = useState(getInitValues('roomID'))
  const [roomName, setRoomName] = useState(getInitValues('roomName'))

  const player = {
    name: playerName,
    id: playerID
  }
  const room = {
    id: roomID,
    name: roomName,
  }
  if (game) {
    return (<WaitingRoom continue={setGame} player={player} room={room}/>)
  }
  if (!playerName) {
    return (<Name set={setPlayerName} />)
  }

  return (
    <Rooms setGame={setGame} setRoomID={setRoomID} setRoomName={setRoomName}/>
  )
}

export default App