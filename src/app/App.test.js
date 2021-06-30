import React from 'react'
import TestRenderer from 'react-test-renderer'
import App from './App';

jest.useFakeTimers()

test('initial state', () => {
  const component = TestRenderer.create(<App init={18} />)

  expect(setInterval).toHaveBeenCalledTimes(0);
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  

})

test('tetriminos at end of board', () => {
  const component = TestRenderer.create(<App init={0} />)

  expect(setInterval).toHaveBeenCalledTimes(0);

  let tree1 = component.toJSON()
  expect(tree1).toMatchSnapshot()

  jest.advanceTimersByTime(5000);

  let tree2 = component.toJSON()
  expect(tree2).toMatchSnapshot()
})

test('keys test', () => {
  const component = TestRenderer.create(<App init={18} />)

  TestRenderer.act(() => {    window.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, key: 'ArrowRight', keyCode: 39}))  })
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  TestRenderer.act(() => {    window.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, key: 'ArrowLeft', keyCode: 37 }))  })
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  TestRenderer.act(() => {    window.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, key: 'ArrowDown', keyCode: 40}))  })
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  TestRenderer.act(() => {    window.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, key: 'ArrowUp', keyCode: 38}))  })
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
