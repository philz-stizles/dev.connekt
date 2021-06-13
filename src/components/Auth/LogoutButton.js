import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CustomButton } from '..';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <CustomButton onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </CustomButton>
  );
};

export default LogoutButton;
