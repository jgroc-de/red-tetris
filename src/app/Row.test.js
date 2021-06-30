import React from 'react'
import renderer from 'react-test-renderer'
import Row from './Row'
import  {numberOfColumns, numberOfLines, filledTetriminosSquared, emptySquared} from '../constanteValues'
import setTetriminosInBoard from '../library/setTetriminosInBoard/setTetriminosInBoard'
import getNewBoard from '../library/getInitValues/getNewBoard'
import getTetriminosShape from '../library/getInitValues/getTetriminosShape'

test('empty row', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let index = 10
    const component = renderer.create(<Row
        key={index}
        number={index}
        squares={board.slice(index * numberOfColumns, index * numberOfColumns + numberOfColumns)}
    />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('row containing tetriminos', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let index = 4
    let tetriminosShape = getTetriminosShape('O')[0]
    let tetriminosPosition = { x: 4, y: 3 }
    board = setTetriminosInBoard(board, tetriminosShape, tetriminosPosition, filledTetriminosSquared)
    const component = renderer.create(<Row
        key={index}
        number={index}
        squares={board.slice(index * numberOfColumns, index * numberOfColumns + numberOfColumns)}
    />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
