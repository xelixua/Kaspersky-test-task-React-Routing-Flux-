import React, {Component} from 'react';

import './usersGroupsList.css';

import UserTileSmall from '../userTileSmall/userTileSmall';

export default class UsersGroupsList extends Component {
  render() {
    if (this.props.currentView !== 'group' || !this.props.users.length) {
      return(null);
    } else {
      //prepare data
      const usersByGroup = this.props.users.reduce((usersForGroup, user, index) => {
        const group = user.group || 'Без группы';
        usersForGroup[group] = usersForGroup[group] || [];
        usersForGroup[group].push(
          <UserTileSmall user={user} key={index}/>
        );
        return usersForGroup;
      }, {'Без группы': []});
      if (!usersByGroup['Без группы'].length) {
        delete usersByGroup['Без группы'];
      }

      //compose view
      const groups = Object.keys(usersByGroup).map((groupName, index) => {
        return(
          <div className="col-md-3 group" key={index}>
            {groupName}<br/><br/>
            <div className="container">
              <div className="row">
                {usersByGroup[groupName]}
              </div>
              <br/>
              <a href="#">Добавить пользователя ...</a>
            </div>
          </div>
        );
      });

      groups.push(
        <div className="col-md-3 group" key={groups.length}>
          <div className="container">
            <a href="#">Добавить группу</a>
          </div>
        </div>
      );

      return(
        <div className="container">
          <div className="row">
            {groups}
          </div>
        </div>
      );
    }
  }
}
