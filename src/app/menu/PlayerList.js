import { useEffect, useState } from 'react'

function PlayerList(props) {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        props.socket.on('players', (playersList) => {
            console.log(playerList)
            setPlayers(playersList)
        })
        props.socket.emit('getPlayers', props.room.name)

        return (() => {
            props.socket.off('players')
        })
    })
    let i = 0
    let playerList = [<p key={i++} data-id={props.player.id}>{props.player.name}</p>]
    for (let player of players) {
        if (player.name !== props.player.name) {
            playerList.push(<p key={i++} data-id={player.id}>{player.name}</p>)
        }
    }

    return (
        <div className='nes-container with-title is-dark'>
            <p className='title'>player List</p>
            {playerList}
        </div>)
}

export default PlayerList