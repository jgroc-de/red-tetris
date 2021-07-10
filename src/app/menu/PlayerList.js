import { useState } from 'react'
import getPlayersFromRoom from '../../library/data/get/getPlayersFromRoom'

function PlayerList(props) {
    const [players, setPlayers] = useState(getPlayersFromRoom(props.roomID))
    let i = 0
    let playerList = [<p key={i++} data-id={props.player.id}>{props.player.name}</p>]
    for (let player of players) {
        playerList.push(<p key={i++} data-id={player.id}>{player.name}</p>)
    }

    return (
        <div className='nes-container with-title is-dark'>
            <p className='title'>player List</p>
            {playerList}
        </div>)
}

export default PlayerList