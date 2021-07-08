import { useState } from "react"
import getInitValues from "../../library/getInitValues/getInitValues"
import Game from "../game/Game"
import PlayerList from "./PlayerList"

function WaitingRoom(props) {
    const [play, setPlay] = useState(getInitValues('play'))

    const goPlay = (e) => {
        setPlay(true)
    }

    const quit = (e) => {
        props.continue(false)
    }

    if (play) {
        return (<Game />)
    }

    return (
        <div id="waiting-room" className="nes-container with-title is-dark gg-margin-auto">
            <p className="title">room: {props.room.name}</p>
            <PlayerList roomID={props.room.id} player={props.player}/>
            <div>
                <button className="nes-btn is-error" onClick={quit}>Exit</button>
                <button className="nes-btn is-success" onClick={goPlay}>Play</button>
            </div>
        </div>
    )
}

export default WaitingRoom