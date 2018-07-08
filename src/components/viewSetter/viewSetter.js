import React, {Component} from 'react';

import './viewSetter.css';

import * as viewActions from '../../actions/viewActions';

export default class ViewSetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'table'
    };
  }

  setView(view) {
    return () => {
      this.setState({currentView: view});
    };
  }

  _changeView(view) {
    return () => {
      viewActions.changeView(view);
    };
  }

  render() {
    let table, list, group;
    switch (this.props.currentView) {
      case 'group':
      table = <a href="#" onClick={this._changeView('table')}>Table</a>;
      group = 'Group';
      list = <a href="#" onClick={this._changeView('list')}>List</a>;
        break;
      case 'list':
      list = 'List';
      group = <a href="#" onClick={this._changeView('group')}>Group</a>;
      table = <a href="#" onClick={this._changeView('table')}>Table</a>;
        break;
      default: //table
        table = 'Table';
        group = <a href="#" onClick={this._changeView('group')}>Group</a>;
        list = <a href="#" onClick={this._changeView('list')}>List</a>;
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            {table}
          </div>
          <div className="col-md-1">
            {list}
          </div>
          <div className="col-md-1">
            {group}
          </div>
        </div>
      </div>
    );
  }
}
