import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  border-radius: 0.5625rem;
  box-shadow: 0 1.5rem 2rem -0.5rem rgb(0 0 0 / 7%),
    0 0.25rem 2rem 0 rgb(0 0 0 / 3%);
  background-color: #ffffff;
  width: 90%;
  margin: 0 auto;

  nav {
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: 900;
  }

  .nav-list {
    display: flex;
  }

  .nav-list-item {
    display: flex;
    align-items: center;
  }

  .nav-list-link {
    border-radius: 0.3125rem;
    margin: 0 0.75rem;
    height: 2rem;
    padding: 0 1.5rem;
    -webkit-transition: background-color 0.2s ease;
    transition: background-color 0.2s ease;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }

  .auth {
    display: flex;

    li:first-of-type {
      padding-right: 1.25rem;
    }
  }
`;
