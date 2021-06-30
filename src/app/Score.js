function Score(props) {
    const nextShape = []
    let i = 0
    if (props.shape.length < 4) {
        nextShape.push(<p key={i++}>...</p>)
    }
    for (let shape of props.shape) {
        nextShape.push(<p key={i}>{shape.replaceAll(' ', '.')}</p>)
        i++
    }
    
    return (
        <div id='meta'>
            <div className="nes-container with-title is-dark">
                <p className="title">next</p>
                {nextShape}
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