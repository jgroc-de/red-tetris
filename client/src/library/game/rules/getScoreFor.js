function getScoreFor(numberOfLines, level) {
    let multiplier = 0
    switch (numberOfLines) {
        case 1:
            multiplier = 40
            break
        case 2:
            multiplier = 100
            break
        case 3:
            multiplier = 300
            break
        case 4:
            multiplier = 1200
            break
        default:
            multiplier = 0
    }

    return multiplier * (level + 1)
}

export default getScoreFor