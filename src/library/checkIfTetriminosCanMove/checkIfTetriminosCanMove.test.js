import { numberOfLines, numberOfColumns, emptySquared, filledSquared } from '../../constanteValues'
import checkIfTetriminosCanMove from '../checkIfTetriminosCanMove/checkIfTetriminosCanMove'
import getNewBoard from '../getInitValues/getNewBoard'
import getTetriminosShape from '../getInitValues/getTetriminosShape'

test('middle board', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let tetriminosShape = getTetriminosShape('O')[0]
    let tetriminosPosition = { x: 4, y: 3 }
    let test = checkIfTetriminosCanMove(board, tetriminosShape, tetriminosPosition, numberOfLines, numberOfColumns, emptySquared)
    expect(test).toBe(true)
})

test('end of board', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let tetriminosShape = getTetriminosShape('O')[0]
    let tetriminosPosition = { x: 4, y: numberOfLines - tetriminosShape.length }
    let test = checkIfTetriminosCanMove(board, tetriminosShape, tetriminosPosition, numberOfLines, numberOfColumns, emptySquared)
    expect(test).toBe(true)
})

test('over end of board', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let tetriminosShape = getTetriminosShape('O')[0]
    let tetriminosPosition = { x: 4, y: numberOfLines }
    let test = checkIfTetriminosCanMove(board, tetriminosShape, tetriminosPosition, numberOfLines, numberOfColumns, emptySquared)
    expect(test).toBe(false)
})

test('over side', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let tetriminosShape = getTetriminosShape('O')[0]
    let tetriminosPosition = { x: -2, y: 1 }
    let test = checkIfTetriminosCanMove(board, tetriminosShape, tetriminosPosition, numberOfLines, numberOfColumns, emptySquared)
    expect(test).toBe(false)
})

test('over non empty square', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, filledSquared)
    let tetriminosShape = getTetriminosShape('O')[0]
    let tetriminosPosition = { x: 1, y: 1 }
    let test = checkIfTetriminosCanMove(board, tetriminosShape, tetriminosPosition, numberOfLines, numberOfColumns, emptySquared)
    expect(test).toBe(false)
})