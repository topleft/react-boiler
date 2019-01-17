import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import home, { initialState as homeInitialState } from './home';

const reducers = {
  home
};

export const initialState = Map({
  home: homeInitialState
});

export default combineReducers( reducers );
