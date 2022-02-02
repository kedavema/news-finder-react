import React from 'react';
import PropTypes from 'prop-types';


export const Header = ({title}) => {
  return (
    <nav className='nav-wrapper light-blue darken-3'>
      <a href='/' className='brand-logo center'>{title}</a>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
}
