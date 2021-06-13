import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CustomButton } from '..';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <CustomButton onClick={() => loginWithRedirect()}>Log In</CustomButton>
  );
};

export default LoginButton;
