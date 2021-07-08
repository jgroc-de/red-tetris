import { numberOfLines, numberOfColumns, emptySquared } from '../../constanteValues'
import getNewBoard from '../getInitValues/getNewBoard';
import insertInString from './insertInBoard';
import setTetriminosInBoard from './setTetriminosInBoard'
import getTetriminosShape from '../getInitValues/getTetriminosShape';

test('add fake tetriminos in board', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let tetriminosShape = getTetriminosShape('O')[0]
    let tetriminosPosition = { x: 4, y: 3 }
    let test = setTetriminosInBoard(board, tetriminosShape, tetriminosPosition, emptySquared)
    board = insertInString(board, 5 + 3 * numberOfColumns, 'O')
    board = insertInString(board, 6 + 3 * numberOfColumns, 'O')
    board = insertInString(board, 5 + 4 * numberOfColumns, 'O')
    board = insertInString(board, 6 + 4 * numberOfColumns, 'O')
    expect(test).toBe(board);
});