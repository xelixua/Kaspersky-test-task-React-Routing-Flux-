 import dispatcher from '../dispatcher';

 export function changeView(newView) {
   dispatcher.dispatch({
     type: 'NEW_VIEW',
     view: newView
   });
 }
