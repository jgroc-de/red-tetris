import setNewTetriminos from './setNewTetriminos'
import getScoreFor from './getScoreFor'
import countFullLinesIn from './countFullLinesIn'
import setTetriminosInBoard from '../setTetriminosInBoard/setTetriminosInBoard'
import checkIfTetriminosCanMove from '../checkIfTetriminosCanMove/checkIfTetriminosCanMove'
import removeFullLines from './removeFullLines'

function newCycle(game, numberOfColumns, numberOfLines, emptySquared) {
    let shape = game.tetriminos.shape.value[game.tetriminos.rotation.value]
    let fullBoard = setTetriminosInBoard(
        game.board.value.slice(),
        shape,
        game.tetriminos.position.value,
        numberOfColumns,
        emptySquared
    )
    const fullLinesInBoard = countFullLinesIn(fullBoard, numberOfColumns, numberOfLines, emptySquared)

    if (fullLinesInBoard > 0) {
        fullBoard = removeFullLines(fullBoard, fullLinesInBoard, numberOfColumns, emptySquared)
    }
    const clearedLines = fullLinesInBoard + game.clearedLines.value
    game.clearedLines.set(clearedLines)
    game.score.set(getScoreFor(fullLinesInBoard, game.level.value) + game.score.value)
    game.level.set(Math.floor(clearedLines / 10))
    game.board.set(fullBoard)
    setNewTetriminos(game.tetriminos)
    shape = game.tetriminos.shape.value[game.tetriminos.rotation.value]
    if (!checkIfTetriminosCanMove(
        game.board.value,
        shape,
        game.tetriminos.position.value,
        numberOfLines,
        numberOfColumns,
        emptySquared
    )) {
        game.endOfGame.set(true)
    }
}

export default newCycle