
import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './styles.scss';

const SidebarLink = (props) => {
  const {to, children} = props;
  console.log(props);
  return (
    <div className='sidebar-link'>
      <NavLink to={to} activeClassName='pop'>{children}</NavLink>
    </div>
  );
}

SidebarLink.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

export default SidebarLink;
