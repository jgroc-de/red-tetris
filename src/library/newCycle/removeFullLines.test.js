import { numberOfLines, numberOfColumns, filledSquared, emptySquared } from "../../constanteValues"
import removeFullLines from "./removeFullLines"
import getNewBoard from '../getInitValues/getNewBoard'

test('full board', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, filledSquared)
    let emptyBoard = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let test = removeFullLines(board, numberOfLines, numberOfColumns, filledSquared, emptySquared)
    expect(test).toBe(emptyBoard)
})
