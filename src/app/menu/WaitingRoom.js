import { useState } from 'react'
import getInitValues from '../../library/data/init/getInitValues'
import Game from '../game/Game'
import PlayerList from './PlayerList'

function WaitingRoom(props) {
    const [play, setPlay] = useState(getInitValues('play'))

    const goPlay = (e) => {
        setPlay(true)
    }

    const quit = (e) => {
        props.continue(false)
        props.socket.emit('leave-room', props.room.name)
    }

    if (play) {
        return (<Game roomID={props.room.id} player={props.player} />)
    }

    return (
        <div id='waiting-room' className='nes-container with-title is-dark gg-margin-auto'>
            <p className='title'>room: {props.room.name}</p>
            <PlayerList
                socket={props.socket.volatile}
                room={props.room}
                player={props.player} />
            <div>
                <button className='nes-btn is-error' onClick={quit}>Exit</button>
                <button className='nes-btn is-success' onClick={goPlay}>Play</button>
            </div>
        </div>
    )
}

export default WaitingRoom