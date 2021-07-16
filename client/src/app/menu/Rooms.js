import { useEffect, useState } from "react"

function Rooms(props) {
    const launchGame = (e) => {
        const input = document.getElementById('game-field')
        const name = input.value
        if (name) {
            if (props.socket.connected) {
                props.socket.emit('create-room', name)
            } else {
                props.setRoomName(name)
                props.setRoomID('lol')
                props.setGame(true)
            }
        } else {
            input.classList.add('is-error')
        }
    }
    const joinGame = (e) => {
        if (props.socket.connected) {
            props.socket.emit('join-room', e.target.dataset.name)
        }
    }

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        props.socket.on('rooms-list', (roomsList) => {
            setRooms(roomsList)
        });
        props.socket.on('join-room', (roomName) => {
            props.setRoomName(roomName)
            props.setRoomID('lol')
            props.setGame(true)
        })
        return () => {
            props.socket.off('rooms-list')
            props.socket.off('join-room')
        }
    })

    let roomsData = []
    let i = 0
    for (let room of rooms) {
        roomsData.push(
            <button
                data-id={room.id}
                data-name={room.name}
                key={i++}
                className='nes-button'
                onClick={joinGame}
            >{room.name}: {room.players}/{room.max} players</button>
        )
    }

    return (
        <div className='gg-full-width'>
            <div id='choose-game' className='nes-container with-title is-dark'>
                <p className='title'>Game List</p>
                {roomsData}
            </div>
            <div id='create-game' className='nes-field nes-container with-title is-dark'>
                <p className='title'>Create Game</p>
                <div className='gg-flex'>
                    <div>
                        <label htmlFor='game-field'>Game Name</label>
                        <input type='text' id='game-field' className='nes-input' />
                    </div>
                    <button className='nes-btn is-success' onClick={launchGame}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Rooms