import checkIfTetriminosCanMove from '../rules/checkIfTetriminosCanMove'
import newCycle from '../newCycle'


function updateBoard(game, numberOfColumns, numberOfLines, emptySquared) {
    let nextPosition = { x: game.tetriminos.position.value.x, y: game.tetriminos.position.value.y + 1 }
    let shape = game.tetriminos.shape.value[game.tetriminos.rotation.value]

    game.timer.set(Date.now())
    if (checkIfTetriminosCanMove(game.board.value, shape, nextPosition, numberOfLines, numberOfColumns, emptySquared)) {
        game.tetriminos.position.set(nextPosition)
        return
    }
    newCycle(game, numberOfColumns, numberOfLines, emptySquared)
}

export default updateBoard