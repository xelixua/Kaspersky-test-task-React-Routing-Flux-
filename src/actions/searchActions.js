import dispatcher from '../dispatcher';

export function filterByString(criteria) {
  dispatcher.dispatch({
    type: 'SEARCH_STRING_CHANGED',
    criteria
  })
}
