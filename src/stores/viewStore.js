import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class ViewStore extends EventEmitter {
  constructor() {
    super();
    this._view = 'table';
  }

  _viewChanged(view) {
    this._view = view;
    this.emit('newView');
  }

  getView() {
    return this._view;
  }

  handleActions(action) {
    switch (action.type) {
      case 'NEW_VIEW':
        this._viewChanged(action.view);
        break;
      default:
    }
  }
}

const viewStore = new ViewStore();
dispatcher.register(viewStore.handleActions.bind(viewStore));
export default viewStore;
