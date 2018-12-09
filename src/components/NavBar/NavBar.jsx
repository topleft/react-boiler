import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavBar = (props) => {
  return (
    <div className='navbar'>
      {
        props.links.map((link, i) => (
          <NavLink key={i} {...link} activeClassName={'active'}/>
        ))
      }
    </div>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf({
    to: PropTypes.string,
    label: PropTypes.string
  })
};

export default NavBar;
