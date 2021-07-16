import { numberOfLines } from '../../../constanteValues'

function removeFullLines(board, countFullLines, numberOfColumns, emptySquared) {
    let newBoard = emptySquared.repeat(numberOfColumns).repeat(countFullLines)
    
    for (let i = 0; i < numberOfLines; i++) {
        let j = 0
        while (j < numberOfColumns) {
            if (board[i * numberOfColumns + j] === emptySquared) {
                newBoard += board.substring(i * numberOfColumns, (i + 1) * numberOfColumns)
                break
            }
            ++j
        }
    }

    return newBoard
}

export default removeFullLines