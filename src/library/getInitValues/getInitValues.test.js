import getInitValues from "./getInitValues"

test('not existing value', () => {
    const test = getInitValues("lol")
    expect(test).toBe(0)
})
