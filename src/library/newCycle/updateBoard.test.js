import updateBoard from './updateBoard'
import { numberOfColumns, numberOfLines, emptySquared, filledSquared } from '../../constanteValues'
import getFakeBoards from '../testFunctions/getFakeBoard'

test('not full board', () => {
    const game = getFakeBoards(emptySquared)
    updateBoard(game, numberOfColumns, numberOfLines, filledSquared, emptySquared)
    expect(game.timer.set).toHaveBeenCalledTimes(1)
    expect(game.tetriminos.position.set).toHaveBeenCalledTimes(1)
})

test('full board', () => {
    const game = getFakeBoards(filledSquared)
    updateBoard(game, numberOfColumns, numberOfLines, filledSquared, emptySquared)
    expect(game.timer.set).toHaveBeenCalledTimes(1)
    expect(game.tetriminos.position.set).toHaveBeenCalledTimes(1)
})