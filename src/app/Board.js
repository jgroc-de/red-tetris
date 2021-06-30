import Row from './Row'
import setTetriminosInBoard from '../library/setTetriminosInBoard/setTetriminosInBoard'
import {numberOfLines, numberOfColumns, filledTetriminosSquared} from '../constanteValues'

function Board(props) {
    const fullBoard = setTetriminosInBoard(props.board, props.shape, props.position, filledTetriminosSquared)
    const rows = []
    for (let i = 0; i < numberOfLines; i++) {
        rows.push(<Row
            key={i}
            number={i}
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
