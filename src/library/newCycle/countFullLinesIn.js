function countFullLinesIn(board, numberOfColumns, numberOfLines, filledSquared) {
    let count = 0
    let fullLine = filledSquared.repeat(numberOfColumns)
    for (let y = 0; y < numberOfLines; ++y) {
        let tmp = board.slice(y * numberOfColumns, (y + 1) * numberOfColumns)
        if (tmp === fullLine) {
            ++count
        }
    }
    return count
}

export default countFullLinesIn