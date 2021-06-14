import styled from 'styled-components';

export const ErrorPageWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  background: var(--clr-primary-10);

  h1 {
    font-size: 10rem;
  }

  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
