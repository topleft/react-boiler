import { Map } from 'immutable';

import {
  RESET_COUNT,
  INCREMENT_COUNT,
  DECREMENT_COUNT
} from '../actions/home';

export const initialState = Map({
  count: 0
});

export default function home( state=initialState, action ) {
  switch(action.type) {
    case RESET_COUNT:
      return state.set('count', 0);
    case INCREMENT_COUNT:
      return state.set('count', state.get('count') + 1);
    case DECREMENT_COUNT:
      return state.set('count', state.get('count') - 1);
    default:
      return state;
  }
}
