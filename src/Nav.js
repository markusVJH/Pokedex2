import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navlink" activeclassname='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pokedex" className="navlink" activeclassname='active'>
              Pokedex
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;