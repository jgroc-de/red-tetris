import React from 'react'
import TestRenderer from 'react-test-renderer'
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import EndOfGame from './EndOfGame'
import getNewBoard from '../library/getInitValues/getNewBoard'
import { numberOfColumns, numberOfLines, emptySquared } from '../constanteValues'
import getTetriminosShape from '../library/getInitValues/getTetriminosShape';

test('basic test', () => {
    const game = {
        tetriminos: {
            shape: { value: null, set: null },
            position: { value: null, set: null },
        },
        board: { value: null, set: null },
        timer: { value: null, set: null },
        endOfGame: { value: false, set: null },
        level: { value: 0, set: null },
        score: { value: 40, set: null },
        clearedLines: { value: 1, set: null }
    }
    const component = TestRenderer.create(<EndOfGame game={game} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})



test('click test', () => {
    const mockSetTimer = jest.fn(test => test)
    const mockSetPosition = jest.fn(test => test)
    const mockSetShape = jest.fn(test => test)
    const mockSetBoard = jest.fn(test => test)
    const mockSetEOG = jest.fn(test => test)
    const mockSetLevel = jest.fn(test => test)
    const mockSetScore = jest.fn(test => test)
    const mockSetClearedLines = jest.fn(test => test)
    
    const position = {x: 1, y: 2}
    const game = {
        tetriminos: {
            shape: { value: getTetriminosShape('O')[0], set: mockSetShape },
            position: { value: position, set: mockSetPosition },
        },
        board: { value: getNewBoard(numberOfColumns * numberOfLines, emptySquared), set: mockSetBoard },
        timer: { value: 100, set: mockSetTimer },
        endOfGame: { value: false, set: mockSetEOG },
        level: { value: 0, set: mockSetLevel },
        score: { value: 40, set: mockSetScore },
        clearedLines: { value: 1, set: mockSetClearedLines }
    }

    let container = document.createElement('div');
    act(() => {    ReactDOM.render(<EndOfGame game={game} />, container);  });
    
    //const component = TestRenderer.create(<EndOfGame game={game} />)
    const button = container.querySelector('button');

    TestRenderer.act(() => { button.dispatchEvent(new MouseEvent('click', { bubbles: true })) })
    //let tree = component.toJSON()
    expect(container).toMatchSnapshot()
})