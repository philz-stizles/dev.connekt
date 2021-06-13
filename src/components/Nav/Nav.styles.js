import styled from 'styled-components';

export const NavWrapper = styled.nav`
  box-shadow: 0 1.5rem 2rem -0.5rem rgb(0 0 0 / 7%),
    0 0.25rem 2rem 0 rgb(0 0 0 / 3%);
  background-color: #000000;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem 0;

  .logo {
    padding: 0 3rem;
    font-weight: 700;
  }

  .search {
    flex: 1;
    display: flex;
    justify-content: center;

    input[type='search'] {
      background: #292929;
      padding: 0.7rem 2.25rem;
      width: 70%;
      border-radius: 0.4725rem;
    }
  }

  .user {
    padding: 0 3rem;
    display: flex;
    align-items: center;

    .user__details {
      display: inline-flex;
      align-items: center;
      margin-right: 3rem;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        // border-radius: 0.475rem;
        margin-right: 2rem;
      }
      p {
        margin: 0;
        color: #fff;
      }
  }
`;
