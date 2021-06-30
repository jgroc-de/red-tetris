import { numberOfColumns, numberOfLines, emptySquared } from '../../constanteValues'
import getNewBoard from './getNewBoard'
import getNextTetriminos from './getNextTetriminos'

function getInitValues(name) {
    switch (name) {
        case 'shape':
            return getNextTetriminos()
        case 'position':
            return { x: numberOfColumns / 2 - 1, y: 0 }
        case 'board':
            return getNewBoard(numberOfLines * numberOfColumns, emptySquared)
        case 'timer':
            return Date.now()
        case 'endOfGame':
            return false
        case 'level':
            return 0
        case 'score':
            return 0
        case 'clearedLines':
            return 0
        case 'rotation':
            return 0
        default:
            return 0
    }
}

export default getInitValues