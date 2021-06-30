import { numberOfColumns } from '../../constanteValues'
import setNewTetriminos from './setNewTetriminos'
import getFakeTetriminos from '../testFunctions/getFakeTetriminos'

test('call test', () => {
    const tetriminos = getFakeTetriminos()
    setNewTetriminos(tetriminos)
    expect(tetriminos.shape.set).toHaveBeenCalledTimes(1)
    expect(tetriminos.position.set).toHaveBeenCalledTimes(1)
    expect(tetriminos.rotation.set).toHaveBeenCalledTimes(1)
    expect(tetriminos.nextShape.set).toHaveBeenCalledTimes(1)
    expect(tetriminos.position.set).toHaveBeenLastCalledWith({ x: numberOfColumns / 2 - 1, y: 0 })
})