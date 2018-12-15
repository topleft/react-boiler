import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Page = ({children, title}) => (
  <div className='page'>
    <h1 className='page__title'>{title}</h1>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default Page;
