import React, {Component} from 'react';

import './usersTable.css';

export default class UsersTable extends Component {
  render() {
    if (this.props.currentView !== 'table' || !this.props.users.length) {
      return(null);
    } else {
      const users = this.props.users.map((user, index) => {
          const className = index % 2 ? null : 'dark';
          return(
            <tr key={index} className={className}>
              <td><input type="checkbox"/></td>
              <td><p className="users-table">{user.fullName}</p></td>
              <td><p className="users-table">{user.account}</p></td>
              <td><p className="users-table">{user.email}</p></td>
              <td><p className="users-table">{user.position}/{user.group}</p></td>
              <td><p className="users-table">{user.phone}</p></td>
            </tr>
          );
        }
      );

      return(
        <div>
          <table>
            <tbody>
              <tr className="users-table-title">
                <th><input type="checkbox"/></th>
                <th><p className="users-table">Полное имя</p></th>
                <th><p className="users-table light">Учетная запись</p></th>
                <th><p className="users-table light">Электронная почта</p></th>
                <th><p className="users-table light">Группа</p></th>
                <th><p className="users-table light">Номер телефона</p></th>
              </tr>
              {users}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
