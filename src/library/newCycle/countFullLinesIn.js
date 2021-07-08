function countFullLinesIn(board, numberOfColumns, numberOfLines, emptySquared) {
    let count = 0
    for (let i = 0; i < numberOfLines; i++) {
        let j = 0
        while (j < numberOfColumns) {
            if (board[i * numberOfColumns + j] === emptySquared) {
                break
            }
            ++j
        }
        if (j === numberOfColumns) {
            ++count
        }
    } 
    
    return count
}

export default countFullLinesIn