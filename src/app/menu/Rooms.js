import createRoomID from "../../library/getData/createRoom"
import getRooms from "../../library/getData/getRooms"

function Rooms(props) {
    const roomsData = getRooms()
    const launchGame = (e) => {
        const input = document.getElementById('game-field')
        const name = input.value
        if (name) {
            props.setRoomName(name)
            props.setRoomID(createRoomID())
            props.setGame(true)
        } else {
            input.classList.add("is-error")
        }
    }
    const joinGame = (e) => {
        props.setRoomName(e.target.dataset.name)
        props.setRoomID(e.target.dataset.id)
        props.setGame(true)
    }

    let rooms = []
    let i = 0
    for (let room of roomsData) {
        rooms.push(<button data-id={room.id} data-name={room.name} key={i++} className="nes-button" onClick={joinGame}
        >{room.name}: {room.players}/{room.max} players</button>)
    }

    return (<div className="gg-full-width">
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
    </div>)
}

export default Rooms