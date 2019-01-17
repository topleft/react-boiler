import { bindActionCreators } from 'redux';
import * as homeActions from './home';

export function bindActions(dispatch) {
  return {
    home: bindActionCreators( homeActions, dispatch ),
  };
}
