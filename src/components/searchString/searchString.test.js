import React from 'react';
import ReactDOM from 'react-dom';
import SearchString from './searchString';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchString />, div);
  ReactDOM.unmountComponentAtNode(div);
});
