import Sort from './Sort';
import React from 'react';
import ReactDOM from 'react-dom';

describe('<Sort />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sort />, div);
  });
});
