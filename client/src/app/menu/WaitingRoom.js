import { useEffect, useState } from 'react'
import Game from '../game/Game'
import PlayerList from './PlayerList'

function WaitingRoom(props) {
    const [play, setPlay] = useState(false)
    const [players, setPlayers] = useState([{ name: props.player.name, id: props.player.id }])

    useEffect(() => {
        props.socket.on('players', (playersList) => {
            let change = false
            if (players.length !== playersList.length) {
                change = true
            }
            if (!change) {
                for (let index in playersList) {
                    if (players[index].id !== playersList[index].id) {
                        break
                    }
                }
            }
            if (change) {
                setPlayers(playersList)
            }
        })
        props.socket.emit('get-player-list', props.room.name)

        return (() => {
            props.socket.off('players')
        })
    })

    const goPlay = (e) => {
        setPlay(true)
    }

    const quit = (e) => {
        props.setGame(false)
        props.socket.emit('leave-room', props.room.name)
    }

    if (play) {
        return (<Game roomID={props.room.id} player={props.player} />)
    }

    const launch = []
    if (players[0].id === props.player.id) {
        launch.push(<button key={'playBtn'} className='nes-btn is-success' onClick={goPlay}>Play</button>)
    }

    return (
        <div id='waiting-room' className='nes-container with-title is-dark gg-margin-auto'>
            <p className='title'>room: {props.room.name}</p>
            <PlayerList player={props.player} players={players} />
            <div>
                <button className='nes-btn is-error' onClick={quit}>Exit</button>
                {launch}
            </div>
        </div>
    )
}

export default WaitingRoom