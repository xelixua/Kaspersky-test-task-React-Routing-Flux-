import dispatcher from '../dispatcher';

export function changeCriteria(criteria) {
  dispatcher.dispatch({
    type: 'SORTING_CRITERIA_CHANGED',
    criteria
  });
}
