import Share from '../Share';
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-dom';

describe('<Share />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    render(<Share />, div);
  });
  test('<Share /> snapshot', () => {
    const tree = renderer.create(<Share />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
