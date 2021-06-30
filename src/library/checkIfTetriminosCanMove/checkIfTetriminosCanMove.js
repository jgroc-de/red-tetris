import isOverBoardSides from './isOverBoardSides'
import isOverEndOfBoard from './isOverEndOfBoard'
import isOverThings from './isOverThings'

function checkIfTetriminosCanMove(board, tetriminosShape, tetriminosPosition, numberOfLines, numberOfColumns, emptySquared) {
    if (isOverEndOfBoard(tetriminosPosition, tetriminosShape, numberOfLines)) {
        return false
    }
    if (isOverBoardSides(tetriminosPosition, tetriminosShape, numberOfColumns)) {
        return false
    }
    if (isOverThings(tetriminosPosition, tetriminosShape, board, numberOfColumns, emptySquared)) {
        return false
    }

    return true
}

export default checkIfTetriminosCanMove