import React, {Component} from 'react';
import './searchString.css';

import * as searchActions from '../../actions/searchActions';

export default class SearchString extends Component {
  _stringChanged(event) {
    searchActions.filterByString(event.target.value);
  }

  render() {
    return(
      <div>
        <input type="email" onChange={this._stringChanged} id="filterBy" className="form-control" aria-describedby="emailHelp" placeholder="отфильтровать" />
      </div>
    );
  }
}
