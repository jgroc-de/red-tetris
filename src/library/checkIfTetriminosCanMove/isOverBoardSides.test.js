import isOverBoardSides from './isOverBoardSides'
import { numberOfColumns } from '../../constanteValues'
import getTetriminosShape from '../getInitValues/getTetriminosShape'


test('in board', () => {
    const test = isOverBoardSides({x: 0, y: 0}, getTetriminosShape('O')[0], numberOfColumns)
    expect(test).toBe(false)
})

test('over left side', () => {
    const test = isOverBoardSides({x: -2, y: 5}, getTetriminosShape('O')[0], numberOfColumns)
    expect(test).toBe(true)
})

test('over right side', () => {
    const test = isOverBoardSides({x: numberOfColumns + 2, y: 0}, getTetriminosShape('O')[0], numberOfColumns)
    expect(test).toBe(true)
})