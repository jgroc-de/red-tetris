import isOverEndOfBoard from './isOverEndOfBoard'
import { numberOfLines } from '../../constanteValues'
import getTetriminosShape from '../getInitValues/getTetriminosShape'

test('in board', () => {
    const test = isOverEndOfBoard({x: 0, y: numberOfLines - 2}, getTetriminosShape('O')[0], numberOfLines)
    expect(test).toBe(false)
})

test('over end of board', () => {
    const test = isOverEndOfBoard({x: 0, y: numberOfLines - 1}, getTetriminosShape('O')[0], numberOfLines)
    expect(test).toBe(true)
})

test('no shape', () => {
    const test = isOverEndOfBoard({x: 0, y: numberOfLines - 1}, [], numberOfLines)
    expect(test).toBe(false)
})