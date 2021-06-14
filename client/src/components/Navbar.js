import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title, logo }) {
  Navbar.defaultProps = {
    title: 'App name',
    logo: 'logo',
  };

  return (
    <nav>
      <div className="container">
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo">
            Logo
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'App name',
  logo: 'logo',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Navbar;
