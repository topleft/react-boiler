import { bindActionCreators } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import home, {
  initialState as homeInitialState,
  actions as homeActions
} from './home';

export function boundActions(dispatch) {
  return {
    home: bindActionCreators( homeActions, dispatch ),
  };
}

const reducers = {
  home
};

export const initialState = Map({
  home: homeInitialState
});

export default combineReducers( reducers );
