import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class SortStore extends EventEmitter {
  _criteriaChanged(criteria) {
    this.emit('sortingCriteriaChanged', criteria);
  }

  handleActions(action) {
    switch (action.type) {
      case 'SORTING_CRITERIA_CHANGED':
        this._criteriaChanged(action.criteria)
        break;
      default:
    }
  }
}

const sortStore = new SortStore();
dispatcher.register(sortStore.handleActions.bind(sortStore));

export default sortStore;
