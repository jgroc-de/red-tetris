function getShapeType(tetriminosShape) {
    let type = ''
    for (let line of tetriminosShape) {
        let tmp = line.trim()
        if (tmp.length) {
            return tmp[0]
        }
    }
    return type
}

export default getShapeType