import getTetriminosShape from "./getTetriminosShape"

function getNextTetriminos() {
    if (process.env.MODE === 'TEST') {
        return getTetriminosShape('I')
    }
    const line = 'IJLOSTZ'
    return getTetriminosShape(line[Math.floor(Math.random() * line.length)])
    
}

export default getNextTetriminos