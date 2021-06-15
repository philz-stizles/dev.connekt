import styled from 'styled-components';

export const DashboardWrapper = styled.section`
  main {
    display: grid;
    grid-template-columns: 14% auto;

    .stat-grid {
      padding: 3rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 3rem;
    }

    .user-grid {
      padding: 3rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }

    .repo-grid {
      padding: 3rem;
      display: grid;
      justify-items: center;
      gap: 3rem;

      @media (min-width: 800px) {
      }
    }
  }

  @media (min-width: 640px) {
    .stat-grid {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  }

  @media (min-width: 800px) {
    .repo-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1200px) {
    .repo-grid {
      grid-template-columns: 2fr 3fr;
    }
  }
`;

export const ContentWrapper = styled.section`
  padding: 3rem;
`;
