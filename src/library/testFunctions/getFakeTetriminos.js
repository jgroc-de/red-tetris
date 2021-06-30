import getTetriminosShape from "../getInitValues/getTetriminosShape";

function getFakeTetriminos() {
    return {
        shape: { value: getTetriminosShape('O'), set: jest.fn(test => test) },
        position: { value: {}, set: jest.fn(test => test) },
        rotation: { value: 0, set: jest.fn(test => test) },
        nextShape: { value: getTetriminosShape('L'), set: jest.fn(test => test)}
    }
}

export default getFakeTetriminos