import { useState } from "react"
import getInitValues from "../library/getInitValues/getInitValues"
import Game from "./Game"

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
        <div className="gg-center">
            <div className="nes-container with-title is-dark">
                <p>{props.playerName}</p>
            </div>
            <div className="nes-container with-title is-dark">
                <p>player 1</p>
            </div>
            <div>
                <button className="nes-btn is-error" onClick={quit}>Exit</button>
                <button className="nes-btn is-success" onClick={goPlay}>Play</button>
            </div>
        </div>
    )
}

export default WaitingRoom