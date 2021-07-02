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

function App(props) {
  const [game, setGame] = useState(getInitValues('game'))
  const [playerName, setPlayerName] = useState(getInitValues('playerName'))

  const launchGame = (e) => {
    setGame(true)
  }

  if (game) {
    return (<WaitingRoom continue={setGame} playerName={playerName} />)
  }
  if (!playerName) {
    return (<Name set={setPlayerName} />)
  }
  return (
    <div className="gg-full-width">
      <div id="choose-game" className="nes-container with-title is-dark">
        <p className="title">Game List</p>
        <button className="nes-button">
          Game 1: 3/4 players
        </button>
        <button className="nes-button">
          Game 1: 3/4 players
        </button>
      </div>
      <div id="create-game" className="nes-field nes-container with-title is-dark">
        <p className="title">Create Game</p>
        <label htmlFor="game-field">Game Name</label>
        <input type="text" id="game-field" className="nes-input" />
        <button className="nes-btn is-success" onClick={launchGame}>Play</button>
      </div>
    </div>
  )
}

export default App