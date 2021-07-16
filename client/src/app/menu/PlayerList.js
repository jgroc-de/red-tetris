function PlayerList(props) {
    let i = 0
    let playerList = []
    for (let player of props.players) {
        if (player.name !== props.player.name) {
            playerList.push(
                <p key={i++} data-id={player.id}>{player.name}</p>
            )
        } else {
            playerList.push(
                <p id="me-in-list" key={i++} data-id={player.id}>{player.name}</p>
            )
        }
    }

    return (
        <div className='nes-container with-title is-dark'>
            <p className='title'>player List</p>
            {playerList}
        </div>
    )
}

export default PlayerList