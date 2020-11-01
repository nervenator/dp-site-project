import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='selected'>
            BIO
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/twitch' activeClassName='selected'>
            TWITCH
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/art' activeClassName='selected'>
            ART
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
