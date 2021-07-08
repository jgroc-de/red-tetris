import Row from './Row'
import setTetriminosInBoard from '../../library/setTetriminosInBoard/setTetriminosInBoard'
import {numberOfLines, numberOfColumns, emptySquared} from '../../constanteValues'
import checkIfTetriminosCanMove from '../../library/checkIfTetriminosCanMove/checkIfTetriminosCanMove'
import getShapeType from '../../library/checkIfTetriminosCanMove/getShapeType'

function getGhostShape(shape) {
    let ghostShape = []
    let type = getShapeType(shape)
    for (let line of shape) {
        ghostShape.push(line.slice().replaceAll(type, 'g'))
    }

    return ghostShape
}

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

function Board(props) {
    const fullBoard = getFullBoard(props, numberOfColumns, numberOfLines, emptySquared)
    const rows = []
    for (let i = 0; i < numberOfLines; i++) {
        rows.push(<Row
            key={i}
            number={i}
            width={numberOfColumns}
            squares={fullBoard.slice(i * numberOfColumns, i * numberOfColumns + numberOfColumns)}
        />)
    }

    return (
        <div id='board'>
            {rows}
        </div>
    )
}

export default Board
