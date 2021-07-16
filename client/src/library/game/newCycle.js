import setNewTetriminos from '../data/init/setNewTetriminos'
import getScoreFor from './rules/getScoreFor'
import countFullLinesIn from './board/countFullLinesIn'
import setTetriminosInBoard from './board/setTetriminosInBoard'
import checkIfTetriminosCanMove from './rules/checkIfTetriminosCanMove'
import removeFullLines from './board/removeFullLines'

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