import getGhostShape from '../shape/getGhostShape'
import checkIfTetriminosCanMove from '../rules/checkIfTetriminosCanMove'
import setTetriminosInBoard from './setTetriminosInBoard'

function getFullBoard(props, numberOfColumns, numberOfLines, emptySquared) {
    let position = {x: props.position.x, y: props.position.y + 1}
    while (checkIfTetriminosCanMove(props.board, props.shape, position, numberOfLines, numberOfColumns, emptySquared)) {
        ++position.y
    }
    position.y -= 1
    let fullBoard = setTetriminosInBoard(props.board, getGhostShape(props.shape), position, numberOfColumns, emptySquared)
    fullBoard = setTetriminosInBoard(fullBoard, props.shape, props.position, numberOfColumns, emptySquared)
    return fullBoard
}

export default getFullBoard