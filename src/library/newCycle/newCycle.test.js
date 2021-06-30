import newCycle from './newCycle'
import getFakeBoards from '../testFunctions/getFakeBoard'
import { filledSquared, numberOfColumns, numberOfLines, emptySquared } from '../../constanteValues'



test('new cycle full board', () => {
    const game = getFakeBoards(filledSquared)
    newCycle(game, numberOfColumns, numberOfLines, filledSquared, emptySquared)
    expect(game.clearedLines.set).toHaveBeenCalledTimes(1)
    expect(game.score.set).toHaveBeenCalledTimes(1)
    expect(game.level.set).toHaveBeenCalledTimes(1)
    expect(game.board.set).toHaveBeenCalledTimes(1)
    expect(game.endOfGame.set).toHaveBeenCalledTimes(1)
})

test('new cycle empty board', () => {
    const game = getFakeBoards(emptySquared)
    newCycle(game, numberOfColumns, numberOfLines, filledSquared, emptySquared)
    expect(game.clearedLines.set).toHaveBeenCalledTimes(1)
    expect(game.score.set).toHaveBeenCalledTimes(1)
    expect(game.level.set).toHaveBeenCalledTimes(1)
    expect(game.board.set).toHaveBeenCalledTimes(1)
    expect(game.endOfGame.set).toHaveBeenCalledTimes(0)
})