import React from 'react';
import ReactDOM from 'react-dom';
import ViewSetter from './viewSetter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewSetter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
