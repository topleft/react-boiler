import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { boundActions } from '../../reducers';

import Page from 'components/Page';

class Home extends React.Component {

  render() {

    const {
      count,
      countActions
    } = this.props;

    return (
      <Page title='Home'>
        <h3>Redux Implementation</h3>
        <section style={{marginTop: '1rem'}}>
          <div>
            Count: {count.get('count')}
          </div>
          <div>
            <button onClick={countActions.incrementCount}>+</button>
            <button onClick={countActions.decrementCount}>-</button>
            <button onClick={countActions.resetCount}>reset</button>
          </div>
        </section>
      </Page>
    );
  }
}


Home.propTypes = {
  count: PropTypes.object,
  countActions: PropTypes.object,
};

export default connect(
  function mapStateToProps( state ){ return { count: state.get('count') }; },
  function mapDispatchToProps( dispatch ){ return { countActions: boundActions(dispatch).home }; }
)(Home);
