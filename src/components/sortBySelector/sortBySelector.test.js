import React from 'react';
import ReactDOM from 'react-dom';
import SortBySelector from './sortBySelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SortBySelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});
