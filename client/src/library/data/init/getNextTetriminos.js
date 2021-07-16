import getTetriminosShape from '../../game/shape/getTetriminosShape'

function getNextTetriminos() {
    if (process.env.NODE_ENV === 'test') {
        return getTetriminosShape('I')
    }
    const line = 'IJLOSTZ'
    return getTetriminosShape(line[Math.floor(Math.random() * line.length)])
    
}

export default getNextTetriminos