import Avatar from './Avatar';
import React from 'react';
import ReactDOM from 'react-dom';

describe('<Avatar />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar />, div);
  });
});
