import { bindActionCreators } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import count, {
  initialState as countInitialState,
  actions as countActions
} from './count';

export function boundActions(dispatch) {
  return {
    home: bindActionCreators( countActions, dispatch ),
  };
}

const reducers = {
  count
};

export const initialState = Map({
  count: countInitialState
});

export default combineReducers( reducers );
