import count, { initialState, actions } from './count';
import { Map } from 'immutable';

describe('count reducer', () => {

  it('should have count set to 0 in initial state', () => {
    expect(initialState.get('count')).toEqual(0);
  });

  it('should return initial state', () => {
    expect(count()).toEqual(initialState);
  });

  it(`should increment the count by 1 when
      INCREMENT_COUNT action is passed in`,
  () => {
    const state = Map({count: 0});
    const expectedState = Map({count: 1});

    expect(count(state, actions.incrementCount()))
      .toEqual(expectedState);
  });

  it(`should decrement the count by 1 when
      DECREMENT_COUNT action is passed in`,
  () => {
    const state = Map({count: 2});
    const expectedState = Map({count: 1});

    expect(count(state, actions.decrementCount()))
      .toEqual(expectedState);
  });

  it(`should reset the count to 0 1 when
      RESET_COUNT action is passed in`,
  () => {
    const state = Map({count: 5});
    const expectedState = Map({count: 0});

    expect(count(state, actions.resetCount()))
      .toEqual(expectedState);
  });
});
