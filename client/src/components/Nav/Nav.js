import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavWrapper } from './Nav.styles';
import { default as DefaultAvatar } from '../../assets/images/avatar.svg';
import LogoutButton from '../Auth/LogoutButton';
import { Link } from 'react-router-dom';
import { GithubContext } from '../../context/githubContext';

const Nav = (props) => {
  const githubContext = React.useContext(GithubContext);
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <NavWrapper>
      <div className="logo">
        <Link to="/">
          <h3>Dev.konnect()</h3>
        </Link>
      </div>
      <div className="search">
        <input type="search" placeholder="Search" />
        Requests: {githubContext.githubRateLimit} / 60
      </div>
      <div className="user">
        <div className="user__details">
          {isUser && user.picture ? (
            <img src={user.picture} alt={user.name} />
          ) : (
            <img src={DefaultAvatar} alt="Default avatar" />
          )}

          {isUser && user.name && (
            <p>
              Welcome, <strong>{user.name}</strong>
            </p>
          )}
        </div>
        <LogoutButton />
      </div>
    </NavWrapper>
  );
};

export default Nav;
