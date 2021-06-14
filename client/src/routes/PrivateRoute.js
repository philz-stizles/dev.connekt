import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ Component, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  console.log(isUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isUser ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
