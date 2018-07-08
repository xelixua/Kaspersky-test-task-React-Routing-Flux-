import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class FilterStore extends EventEmitter {
    _filterChanged(filter) {
      this.emit('filterChanged', filter);
    }

    handleActions(action) {
      switch (action.type) {
        case 'SEARCH_STRING_CHANGED':
          this._filterChanged(action.criteria)
          break;
        default:
      }
    }
}

const filterStore = new FilterStore();
dispatcher.register(filterStore.handleActions.bind(filterStore));

export default filterStore;
