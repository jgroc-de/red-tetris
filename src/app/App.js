import React, { useState } from 'react'
import getInitValues from '../library/getInitValues/getInitValues'
import WaitingRoom from './WaitingRoom'
import Name from './Name'

/*
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
*/

/*
const [response, setResponse] = useState("")

useEffect(() => {
  const socket = socketIOClient(ENDPOINT);
  socket.on("FromAPI", data => {
    setResponse(data);
  });
}, []);
*/

function getRooms() {
  return [
    {
      name: "game1",
      id: "1",
      max: 4,
      players: 2,
    },
    {
      id: "2",
      name: "game2",
      max: 8,
      players: 3,
    }
  ]
}

function createRoomID() {
  return 3
}

function App(props) {
  const [game, setGame] = useState(getInitValues('game'))
  const [playerName, setPlayerName] = useState(getInitValues('playerName'))
  const [playerID] = useState(getInitValues('playerID'))
  const [roomID, setRoomID] = useState(getInitValues('roomID'))
  const [roomName, setRoomName] = useState(getInitValues('roomName'))

  const roomsData = getRooms()
  const launchGame = (e) => {
    const input = document.getElementById('game_field')
    const name = input.value
    if (name) {
      setRoomName(name)
      setRoomID(createRoomID())
      setGame(true)
    } else {
      input.classList.add("is-error")
    }
  }
  const joinGame = (e) => {
    setRoomName(e.target.dataset.name)
    setRoomID(e.target.dataset.id)
    setGame(true)
  }
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

  let rooms = []
  let i = 0
  for (let room of roomsData) {
    rooms.push(<button data-id={room.id} data-name={room.name} key={i++} className="nes-button" onClick={joinGame}
      >{room.name}: {room.players}/{room.max} players</button>)
  }
  return (
    <div className="gg-full-width">
      <div id="choose-game" className="nes-container with-title is-dark">
        <p className="title">Game List</p>
        {rooms}
      </div>
      <div id="create-game" className="nes-field nes-container with-title is-dark">
        <p className="title">Create Game</p>
        <div className="gg-flex">
          <div>
            <label htmlFor="game-field">Game Name</label>
            <input type="text" id="game-field" className="nes-input" />
          </div>
          <button className="nes-btn is-success" onClick={launchGame}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default App