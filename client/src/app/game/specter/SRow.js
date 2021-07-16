import SSquare from './SSquare'

function SRow(props) {
    const squares = []
    for (let i = 0; i < props.width; i++) {
        squares.push(<SSquare key={i} square={props.squares[i]}/>)
    }

    return (
        <div key={props.index} className='is-black'>
            {squares}
        </div>
    )
}

export default SRow
