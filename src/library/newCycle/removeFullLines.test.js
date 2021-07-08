import { numberOfLines, numberOfColumns, emptySquared } from "../../constanteValues"
import removeFullLines from "./removeFullLines"
import getNewBoard from '../getInitValues/getNewBoard'

test('full board', () => {
    let board = getNewBoard(numberOfLines * numberOfColumns, "p")
    let emptyBoard = getNewBoard(numberOfLines * numberOfColumns, emptySquared)
    let test = removeFullLines(board, numberOfLines, numberOfColumns, emptySquared)
    expect(test).toBe(emptyBoard)
})
