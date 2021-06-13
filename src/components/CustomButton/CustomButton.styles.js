import styled from 'styled-components';

export const CustomButtonWrapper = styled.div`
  display: inline-block;

  a,
  button {
    cursor: pointer;
    font-weight: 500;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s ease;
    color: ${(props) => (props.outlined ? 'var(--clr-grey-1)' : '#ffffff')};
    padding: ${(props) =>
      props.size === 'large' ? '1.2rem 2.75rem' : '0.7rem 2.25rem'};
    font-size: ${(props) => (props.size === 'large' ? '1.65rem' : '1.4rem')};
    border-radius: 0.475rem;
    background: ${(props) =>
      props.outlined ? 'transparent' : 'var(--clr-grey-1)'};
    border: ${(props) =>
      props.outlined ? '1px solid var(--clr-grey-1)' : '1px solid transparent'};
    // color: var(--clr-primary-10);
  }
`;
