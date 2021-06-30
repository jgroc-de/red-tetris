import { filledTetriminosSquared } from "../../constanteValues"

function getRealBottom(tetriminosShape) {
    let length = tetriminosShape.length
    while (length-- > 0) {
        if (tetriminosShape[length].includes(filledTetriminosSquared)) {
            return length
        }
    }

    return length
}

function isOverEndOfBoard(tetriminosPosition, tetriminosShape, numberOfLines) {
    if (getRealBottom(tetriminosShape) + tetriminosPosition.y >= numberOfLines) {
        return true
    }

    return false
}

export default isOverEndOfBoard