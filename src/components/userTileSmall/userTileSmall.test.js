import React from 'react';
import ReactDOM from 'react-dom';
import UserTileSmall from './userTileSmall';

const user = {
  fullName: 'Sergey Maksimenko',
  account: 'companydomain/SergeyMaksimenko',
  email: 'sergey_maksimenko@ukr.net',
  photo: '/user_photo.jpeg',
  group: 'Management',
  position: 'CEO',
  phone: '+380997883159',
  permissions: 3
};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserTileSmall user={user}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
