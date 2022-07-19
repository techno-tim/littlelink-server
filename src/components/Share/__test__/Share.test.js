import Share from '../Share';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('<Share />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Share />, div);
  });
  test('<Share /> snapshot', () => {
    const tree = renderer.create(<Share />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
