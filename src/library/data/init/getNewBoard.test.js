import getNewBoard from './getNewBoard'
import {emptySquared} from '../../constanteValues'

test('new board', () => {
    const newBoard = getNewBoard(200, emptySquared)
    expect(newBoard).toBe(emptySquared.repeat(200))
})
