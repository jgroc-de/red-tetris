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
        <div className='s-board nes-container is-dark with-title' data-name={props.opponent.name}>
            <p className="title">{props.opponent.name}</p>
            {rows}
        </div>
    )
}

export default SBoard