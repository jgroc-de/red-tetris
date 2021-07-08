import React from 'react'
import renderer from 'react-test-renderer'
import Square from './Square'

test('empty square', () => {
    const component = renderer.create(<Square square={null} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

test('filled square', () => {
    const component = renderer.create(<Square square={"t"} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('tetriminos square', () => {
    const component = renderer.create(<Square square={"o"} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
