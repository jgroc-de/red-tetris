import { IShape, JShape, LShape, OShape, SShape, TShape, ZShape } from "../../constanteValues"

function getTetriminosShape(shape) {
    switch (shape) {
        case 'I':
            return IShape
        case 'J':
            return JShape
        case 'L':
            return LShape
        case 'O':
            return OShape
        case 'S':
            return SShape
        case 'T':
            return TShape
        case 'Z':
            return ZShape
        default:
            return OShape
    }
}

export default getTetriminosShape