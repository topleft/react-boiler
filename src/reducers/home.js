import { Map } from 'immutable';

const RESET_COUNT = 'RESET_COUNT';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const actions = {
  resetCount: () => ({ type: RESET_COUNT }),
  incrementCount: () => ({ type: INCREMENT_COUNT }),
  decrementCount: () => ({ type: DECREMENT_COUNT })
}

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
