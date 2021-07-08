import getShapeType from "./getShapeType"

function getRealFirst(tetriminosShape) {
    let min = tetriminosShape.length
    let type = getShapeType(tetriminosShape)
    for (let line of tetriminosShape) {
        let tmp = line.indexOf(type)
        if (tmp < min && tmp >= 0) {
            min = tmp
        }
    }
    return min
}

function getRealLast(tetriminosShape) {
    let max = 0
    let type = getShapeType(tetriminosShape)
    for (let line of tetriminosShape) {
        let tmp = line.lastIndexOf(type)
        if (tmp > max) {
            max = tmp
        }
    }
    return max
}

function isOverBoardSides(tetriminosPosition, tetriminosShape, numberOfColumns) {
    const realFirst = getRealFirst(tetriminosShape)
    const realLast = getRealLast(tetriminosShape)
    if (realFirst + tetriminosPosition.x < 0 ) {
        return true
    } else if (realLast + tetriminosPosition.x >= numberOfColumns) {
        return true
    }

    return false
}

export default isOverBoardSides