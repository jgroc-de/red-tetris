import { emptySquared } from '../../constanteValues'
import Row from './Row'

function Score(props) {
    const nextShape = []
    let i = 0
    if (props.shape.length < 4) {
        nextShape.push(<Row
            key={i}
            number={i}
            width={3}
            squares={emptySquared.repeat(3)}
        />)
    }
    ++i
    for (let shape of props.shape) {
        nextShape.push(<Row
            key={i}
            number={i}
            width={shape.length}
            squares={shape}
        />)
        ++i
    }
    
    return (
        <div id='meta'>
            <div className="nes-container with-title is-dark">
                <p className="title">next</p>
                <div id='preview'>{nextShape}</div>
            </div>
            <div className="nes-container with-title is-dark">
                <p className="title">level</p>
                <p>{props.level}</p>
            </div>
            <div className="nes-container with-title is-dark">
                <p className="title">score</p>
                <p>{props.score}</p>
            </div>
            <div className="nes-container with-title is-dark">
                <p className="title">lines</p>
                <p>{props.clearedLines}</p>
            </div>
        </div>
    )
}

export default Score