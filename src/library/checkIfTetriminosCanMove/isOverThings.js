function isOverThings(tetriminosPosition, tetriminosShape, board, numberOfColumns, emptySquared) {
    for (let y = 0; y < tetriminosShape.length; y++) {
        for (let x = 0; x < tetriminosShape[0].length; x++) {
            const posY = (tetriminosPosition.y + y) * numberOfColumns
            const posX = tetriminosPosition.x + x
            if (tetriminosShape[y][x] !== emptySquared && board[posX + posY] !== emptySquared) {
                return true
            }
        }
    }

    return false
}

export default isOverThings