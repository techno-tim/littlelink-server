import Button from './Button';
import React from 'react';
import ReactDOM from 'react-dom';

describe('<Button />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
});
