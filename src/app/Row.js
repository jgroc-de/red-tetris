import { numberOfColumns } from '../constanteValues'
import Square from './Square'

function Row(props) {
    const squares = []
    for (let i = 0; i < numberOfColumns; i++) {
        squares.push(<Square key={i} square={props.squares[i]}/>)
    }

    return (
        <div key={props.index} className='is-primary'>
            {squares}
        </div>
    )
}

export default Row
