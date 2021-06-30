import { numberOfLines, numberOfColumns, filledSquared, emptySquared } from "../../constanteValues"
import countFullLinesIn from './countFullLinesIn'
import getNewBoard from '../getInitValues/getNewBoard'

test('full board', () => {
    let board = getNewBoard((numberOfLines - 1) * numberOfColumns, filledSquared)
    let line = getNewBoard(1 * numberOfColumns, emptySquared)
    let test = countFullLinesIn(board + line, numberOfColumns, numberOfLines, filledSquared)
    expect(test).toBe(numberOfLines - 1)
})

test('empty board', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let test = countFullLinesIn(board, numberOfColumns, numberOfLines, filledSquared)
    expect(test).toBe(0)
})