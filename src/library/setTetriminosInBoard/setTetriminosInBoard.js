import {numberOfColumns, emptySquared} from '../../constanteValues'
import insertInBoard from './insertInBoard'

function setTetriminosInBoard(fullBoard, shape, position, token) {
    let updatedBoard = fullBoard

    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[0].length; x++) {
            let posY = (position.y + y) * numberOfColumns
            let posX = position.x + x
            if (shape[y][x] !== emptySquared) {
                updatedBoard = insertInBoard(updatedBoard, posX + posY, token)
            }
        }
    }
    return updatedBoard
}

export default setTetriminosInBoard
