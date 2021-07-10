import getShapeType from './getShapeType'

function getGhostShape(shape) {
    let ghostShape = []
    let type = getShapeType(shape)
    for (let line of shape) {
        ghostShape.push(line.slice().replaceAll(type, 'g'))
    }

    return ghostShape
}

export default getGhostShape