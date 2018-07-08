import React, {Component} from 'react';
import UserTile from '../userTile/userTile';

import './usersCardsList.css';

export default class UsersCardsList extends Component {
  render() {
    if (this.props.currentView !== 'list' || !this.props.users.length) {
      return(null);
    } else {
      const users = this.props.users.map((user, index) => {
        return(
          <div className="col-md-2 usertile" key={index}>
            <UserTile user={user} />
          </div>
        );
      });

      return(
        <div className="container">
          <div className="row">
            {users}
          </div>
        </div>
      );
    }
  }
}
