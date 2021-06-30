function removeFullLines(board, countFullLines, numberOfColumns, filledSquared, emptySquared) {
    let fullLine = filledSquared.repeat(numberOfColumns)
    let newBoard = emptySquared.repeat(numberOfColumns).repeat(countFullLines)
    let tmpBoard = board.split(fullLine)
    
    for (let part of tmpBoard) {
        if (part) {
            newBoard += part
        }
    }

    return newBoard
}

export default removeFullLines