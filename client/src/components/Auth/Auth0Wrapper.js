import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import preloaderGif from '../../assets/images/preloader.gif';

const Auth0Wrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <PageWrapper>
        <img src={preloaderGif} alt="Spinner" />
      </PageWrapper>
    );
  }
  if (error) {
    return (
      <PageWrapper>
        <h1>{error.message}</h1>
      </PageWrapper>
    );
  }
  return <>{children}</>;
};

const PageWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-grey-10);

  img {
    width: 15rem;
  }
`;

export default Auth0Wrapper;
