import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavBar = (props) => {
  return (
    <div className='navbar'>
      {
        props.links.map(({to, label, className}, i) => (
          <NavLink
            key={i}
            className={className}
            to={to}>
            {label}
          </NavLink>
        ))
      }
    </div>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf({
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  })
};

export default NavBar;
