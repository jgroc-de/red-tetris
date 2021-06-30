import getScoreFor from './getScoreFor'

test('valid scores', () => {
    let test = getScoreFor(4, 1)
    expect(test).toBe(2400)
    test = getScoreFor(1, 2)
    expect(test).toBe(120)
    test = getScoreFor(3, 9)
    expect(test).toBe(3000)
    test = getScoreFor(2, 0)
    expect(test).toBe(100)
})

test('non valid scores', () => {
    let test = getScoreFor(0, 10)
    expect(test).toBe(0)
    test = getScoreFor(5, 2)
    expect(test).toBe(0)
})