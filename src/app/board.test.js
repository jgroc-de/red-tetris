import React from 'react'
import renderer from 'react-test-renderer'
import Board from './Board'
import  {numberOfColumns, numberOfLines, filledTetriminosSquared, emptySquared} from '../constanteValues'
import setTetriminosInBoard from '../library/setTetriminosInBoard/setTetriminosInBoard'
import getNewBoard from '../library/getInitValues/getNewBoard'
import getTetriminosShape from '../library/getInitValues/getTetriminosShape'

test('board with 1 tetriminos', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let tetriminosShape = getTetriminosShape('O')[0]
    let tetriminosPosition = { x: 4, y: 3 }
    board = setTetriminosInBoard(board, tetriminosShape, tetriminosPosition, filledTetriminosSquared)
    const component = renderer.create(<Board board={board} shape={tetriminosShape} position={tetriminosPosition} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})