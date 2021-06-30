import { IShape, JShape, LShape, OShape, SShape, TShape, ZShape } from "../../constanteValues"
import getTetriminosShape from "./getTetriminosShape"

test('shape\'s test', () => {
    let shape = getTetriminosShape('I')
    expect(shape).toBe(IShape)
    shape = getTetriminosShape('J')
    expect(shape).toBe(JShape)
    shape = getTetriminosShape('L')
    expect(shape).toBe(LShape)
    shape = getTetriminosShape('O')
    expect(shape).toBe(OShape)
    shape = getTetriminosShape('S')
    expect(shape).toBe(SShape)
    shape = getTetriminosShape('T')
    expect(shape).toBe(TShape)
    shape = getTetriminosShape('Z')
    expect(shape).toBe(ZShape)
    shape = getTetriminosShape('lolo')
    expect(shape).toBe(OShape)
})