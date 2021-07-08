import updateBoard from './updateBoard'
import { numberOfColumns, numberOfLines, emptySquared } from '../../constanteValues'
import getFakeBoards from '../testFunctions/getFakeBoard'

test('not full board', () => {
    const game = getFakeBoards(emptySquared)
    updateBoard(game, numberOfColumns, numberOfLines, emptySquared)
    expect(game.timer.set).toHaveBeenCalledTimes(1)
    expect(game.tetriminos.position.set).toHaveBeenCalledTimes(1)
})

test('full board', () => {
    const game = getFakeBoards("p")
    updateBoard(game, numberOfColumns, numberOfLines, emptySquared)
    expect(game.timer.set).toHaveBeenCalledTimes(1)
    expect(game.tetriminos.position.set).toHaveBeenCalledTimes(1)
})