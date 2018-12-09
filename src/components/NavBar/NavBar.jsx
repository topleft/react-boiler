import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavBar = (props) => {
  return (
    <div className='navbar'>
      {
        props.links.map(({to, children}, i) => (
          <NavLink
            key={i}
            to={to}>
            {children}
          </NavLink>
        ))
      }
    </div>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf({
    to: PropTypes.string,
    children: PropTypes.string,
  })
};

export default NavBar;
