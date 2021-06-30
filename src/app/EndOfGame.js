import getInitValues from "../library/getInitValues/getInitValues"

function EndOfGame(props) {

    const restartGame = (e) => {
        props.game.board.set(getInitValues('board'))
        props.game.tetriminos.shape.set(getInitValues('shape'))
        props.game.tetriminos.position.set(getInitValues('position'))
        props.game.timer.set(getInitValues('timer'))
        props.game.endOfGame.set(getInitValues('endOfGame'))
        props.game.level.set(getInitValues('level'))
        props.game.score.set(getInitValues('score'))
        props.game.clearedLines.set(getInitValues('clearedLines'))
    }

    return (
        <div id="end">
            <div className="nes-container with-title is-dark is-centered">
                <p className="title">End Of Game</p>
                <p>score: {props.game.score.value}</p>
                <p>lines: {props.game.clearedLines.value}</p>
                <p>level: {props.game.level.value}</p>
            </div>
            <button id="restart" onClick={restartGame} className="nes-btn is-primary">Restart Game</button>
        </div>
    )
}

export default EndOfGame
