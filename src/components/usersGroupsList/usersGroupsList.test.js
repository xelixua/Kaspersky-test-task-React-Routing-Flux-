import React from 'react';
import ReactDOM from 'react-dom';
import UsersGroupsList from './usersGroupsList';

const users = [
  {
    fullName: 'Sergey Maksimenko',
    account: 'companydomain/SergeyMaksimenko',
    email: 'sergey_maksimenko@ukr.net',
    photo: '/user_photo.jpeg',
    group: 'Management',
    position: 'CEO',
    phone: '+380997883159',
    permissions: 3
  }
];
const currentView = 'group';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UsersGroupsList
    users={users}
    currentView={currentView}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
