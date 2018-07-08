import React, {Component} from 'react';
import './sortBySelector.css';

import * as sortActions from '../../actions/sortActions';

export default class SortBySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      criteria: 'name'
    };
    this._sortByTitle = 'Сортировать по ...';
  }

  _changeCriteria(criteria) {
    return () => {
      let criteriaName;
      switch (criteria) {
        case 'fullName':
          criteriaName = 'имени';
          break;
        case 'account':
          criteriaName = 'учетной записи';
          break;
        case 'email':
          criteriaName = 'email';
          break;
        case 'group':
          criteriaName = 'группе';
          break;
        case 'phone':
          criteriaName = 'номеру телефона';
          break;
        default:
          criteriaName = '...';
      }
      this._sortByTitle = `Сортировать по ${criteriaName}`
      sortActions.changeCriteria(criteria);
    };
  }

  render() {
    return(
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this._sortByTitle}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={this._changeCriteria('fullName')}>имени</a>
          <a className="dropdown-item" href="#" onClick={this._changeCriteria('account')}>учетной записи</a>
          <a className="dropdown-item" href="#" onClick={this._changeCriteria('email')}>электронной почте</a>
          <a className="dropdown-item" href="#" onClick={this._changeCriteria('group')}>группе</a>
          <a className="dropdown-item" href="#" onClick={this._changeCriteria('phone')}>номеру телефона</a>
        </div>
      </div>
    );
  }
}
