import { numberOfColumns, numberOfLines } from '../../../constanteValues'
import SRow from './SRow'

function getOpponentBoard(id, board) {
    return board
}

function SBoard(props) {
    const board = getOpponentBoard(props.opponent.id, props.board)
    const rows = []
    for (let i = 0; i < numberOfLines; i++) {
        rows.push(<SRow
            key={i}
            number={i}
            width={numberOfColumns}
            squares={board.slice(i * numberOfColumns, i * numberOfColumns + numberOfColumns)}
        />)
    }

    return (
        <div id='' data-name={props.opponent.name}>
            {rows}
        </div>
    )
}

export default SBoard