import Row from './Row'
import {numberOfLines, numberOfColumns, emptySquared} from '../../constanteValues'
import getFullBoard from '../../library/game/board/getFullBoard'

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
