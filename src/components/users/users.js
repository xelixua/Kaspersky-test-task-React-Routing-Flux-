import React, {Component} from 'react';

import usersStore from '../../stores/usersStore';
import viewStore from '../../stores/viewStore';
import sortStore from '../../stores/sortStore';
import filterStore from '../../stores/filterStore';

import ViewSetter from '../viewSetter/viewSetter';
import SearchString from '../searchString/searchString';
import SortBySelector from '../sortBySelector/sortBySelector';
import UsersTable from '../usersTable/usersTable';
import UsersCardsList from '../usersCardsList/usersCardsList';
import UsersGroupsList from '../usersGroupsList/usersGroupsList';

import './users.css';


export default class Users extends Component {
  constructor(props) {
    super(props);
    this._usersStore = usersStore;
    this._viewStore = viewStore;
    this._sortStore = sortStore;
    this._filterStore = filterStore;
    this.state = {
      users: this._usersStore.getAll(),
      currentView: this._viewStore.getView()
    };
  }

  _sortUsersBy(criteria) {
    const sortedUsers = this.state.users.sort((a, b) => a[criteria] > b[criteria]);
    this.setState({users: sortedUsers});
  }

  _filterUsersBy(criteria) {
    criteria = criteria.toLowerCase();
    const filteredUsers = this._usersStore.getAll().filter(user =>
      Object.keys(user).some(key => user.lower[key] && user.lower[key].indexOf(criteria) > -1));
    this.setState({users: filteredUsers});
    this._noUsers = filteredUsers.length ? null : <div>Нет пользователей, соответсвующих критерию поиска</div>;
  }

  componentWillMount() {
    this._viewStore.on('newView', () => {
      this.setState({currentView: this._viewStore.getView()});
    });
    this._sortStore.on('sortingCriteriaChanged', criteria => {
      this._sortUsersBy(criteria);
    });
    this._filterStore.on('filterChanged', criteria => {
      this._filterUsersBy(criteria);
    });
  }

  render() {
    return(
      <div className="Users">
        <div className="container">

          <div className="row">
            <div className="col-md-6">
              <ViewSetter
                currentView={this.state.currentView}
              />
            </div>
            <div className="col-md-3">
              <SearchString />
            </div>
            <div className="col-md-3">
              <SortBySelector />
            </div>
          </div>
          <br/>

          <div className="row">
            <UsersTable
              users={this.state.users}
              currentView={this.state.currentView}
            />
            <UsersCardsList
              users={this.state.users}
              currentView={this.state.currentView}
            />
            <UsersGroupsList
              users={this.state.users}
              currentView={this.state.currentView}
            />
          </div>
          {this._noUsers}
        </div>
      </div>
    );
  }
}
