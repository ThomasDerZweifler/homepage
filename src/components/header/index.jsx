import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-menu">
        <Link to={'/'}>Start</Link>
        <Link to={'/about'}>Über mich</Link>
        <Link to={'/tagcloud'}>Textwolke</Link>
      </div>
    </div>
  );
};

export default Header;
