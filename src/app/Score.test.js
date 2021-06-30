import React from 'react'
import renderer from 'react-test-renderer'
import getTetriminosShape from '../library/getInitValues/getTetriminosShape';
import Score from './Score'

test('print score', () => {
    const component = renderer.create(<Score shape={getTetriminosShape('L')[0]}_score={40} level={0} clearedLines={1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});