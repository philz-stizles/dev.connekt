import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CustomButtonWrapper } from './CustomButton.styles';

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

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  outlined: PropTypes.bool,
};

export default CustomButton;
