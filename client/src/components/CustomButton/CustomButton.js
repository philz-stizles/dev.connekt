import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomButton = ({ children, link, onClick, size, outlined, loading }) => {
  if (link) {
    return (
      <CustomButtonWrapper size={size}>
        {link && <Link to={link}>{children}</Link>}
      </CustomButtonWrapper>
    );
  } else {
    return (
      <CustomButtonWrapper size={size} outlined={outlined}>
        {<button onClick={onClick ? onClick : null}>{children}</button>}
      </CustomButtonWrapper>
    );
  }
};

const CustomButtonWrapper = styled.div`
  display: inline-block;
  margin-right: 1rem;

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

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  outlined: PropTypes.bool,
};

export default CustomButton;
