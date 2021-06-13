import styled from 'styled-components';

export const HomeWrapper = styled.main`
  background: #ffffff;
  min-height: 100vh;

  section {
    margin: 2rem;
    padding: 2rem 0 28rem 0;
    border-radius: 0.8125rem;
    background: #d3cce3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .cta {
      max-width: 80rem;
      margin: 0 auto;

      .cta-inner {
        padding: 8rem 0 9rem 0;
        max-width: 76rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        p {
          font-size: 1.8rem;
          color: #4d4d4d;
          margin: 0 0 1.75rem 0;
          line-height: 1.6;
          max-width: 54rem;
        }

        h1 {
          font-size: 4rem;
          font-weight: 600;
          max-width: 54rem;
          line-height: 1.3;
        }

        .sub-intro {
          font-size: 1.9rem;
          margin: 1.75rem 0 3rem 0;
          line-height: 1.6;
          max-width: 64rem;
        }

        .actions div:last-of-type {
          margin-left: 2.25rem;
        }
      }
    }
  }
`;
