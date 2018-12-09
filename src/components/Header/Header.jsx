import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = (props) => {

  return (
    <header className='header'>
      <h1>topleft</h1>
      <h2>react boiler</h2>
      <div className={'header__links'}>
        {props.children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.element
};

export default Header;
