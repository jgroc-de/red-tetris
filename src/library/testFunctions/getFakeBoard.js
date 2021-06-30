import { numberOfColumns, numberOfLines } from "../../constanteValues"
import getNewBoard from "../getInitValues/getNewBoard"
import getTetriminosShape from "../getInitValues/getTetriminosShape"


function getFakeBoards(squareContent) {
    const game = {
        tetriminos: {
            shape: { value: getTetriminosShape('O'), set: jest.fn(test => test) },
            position: { value: {x: 1, y: 2}, set: jest.fn(test => test) },
            rotation: { value: 0, set:jest.fn(test => test) },
            nextShape: { value: getTetriminosShape('L'), set: jest.fn(test => test) }
        },
        board: { value: getNewBoard(numberOfColumns * numberOfLines, squareContent), set: jest.fn(test => test) },
        timer: { value: 100, set: jest.fn(test => test) },
        endOfGame: { value: false, set: jest.fn(test => test) },
        level: { value: 0, set: jest.fn(test => test) },
        score: { value: 40, set: jest.fn(test => test) },
        clearedLines: { value: 1, set: jest.fn(test => test) }
    }

    return game
}

export default getFakeBoards