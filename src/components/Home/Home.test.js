import Home from './Home';
import React from 'react';
import ReactDOM from 'react-dom';

describe('<Home />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });
});
