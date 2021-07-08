import { useState } from "react"
import getInitValues from "../library/getInitValues/getInitValues"
import Game from "./Game"

function getPlayersFromRoom(id) {
    return [
        {
            name: "lolo",
            id: 234
        },
        {
            name: "teset",
            id: 87
        },
    ]
}

function WaitingRoom(props) {
    const [play, setPlay] = useState(getInitValues('play'))

    const goPlay = (e) => {
        setPlay(true)
    }

    const quit = (e) => {
        props.continue(false)
    }
    const players = getPlayersFromRoom(props.roomID)
    let i = 0
    let playerList = [<p key={i++} data-id={props.player.id}>{props.player.name}</p>]
    for (let player of players) {
        playerList.push(<p key={i++} data-id={player.id}>{player.name}</p>)
    }
    if (play) {
        return (<Game />)
      }

    return (
        <div className="gg-center nes-container with-title">
            <p className="title">room: {props.room.name}</p>
            <div className="nes-container with-title is-dark">
                <p className="title">player List</p>
                {playerList}
            </div>
            <div>
                <button className="nes-btn is-error" onClick={quit}>Exit</button>
                <button className="nes-btn is-success" onClick={goPlay}>Play</button>
            </div>
        </div>
    )
}

export default WaitingRoom