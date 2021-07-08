function getRealBottom(tetriminosShape, emptySquared) {
    let length = tetriminosShape.length
    let emptyLine = emptySquared.repeat(tetriminosShape[0].length)
    while (length-- > 0) {
        if (tetriminosShape[length] !== emptyLine) {
            return length
        }
    }

    return length
}

function isOverEndOfBoard(tetriminosPosition, tetriminosShape, numberOfLines, emptySquared) {
    if (getRealBottom(tetriminosShape, emptySquared) + tetriminosPosition.y >= numberOfLines) {
        return true
    }

    return false
}

export default isOverEndOfBoard