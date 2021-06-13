import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CustomButton } from '..';
import { HeaderWrapper } from './Header.styles';
import { Link } from 'react-router-dom';
import LoginButton from '../Auth/LoginButton';
import LogoutButton from '../Auth/LogoutButton';

const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <HeaderWrapper>
      <nav>
        <div className="logo">Dev.konnect</div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link className="nav-list-link" to="/profiles">
              Profiles
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-list-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-list-link" to="/resources">
              Resources
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-list-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        {!isUser && (
          <ul className="auth">
            <li>
              <LoginButton />
            </li>
            <li>
              <CustomButton>Sign up</CustomButton>
            </li>
          </ul>
        )}

        {isUser && (
          <ul className="auth">
            <li>
              <LogoutButton />
            </li>
          </ul>
        )}
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
