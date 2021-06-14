import React from 'react';
import styled from 'styled-components';

const CustomInput = ({ type, description, ...rest }) => {
  return (
    <CustomInputWrapper>
      {type === 'textarea' ? (
        <textarea {...rest} />
      ) : (
        <input type={type} {...rest} />
      )}
      {description && <small className="form-text">{description}</small>}
    </CustomInputWrapper>
  );
};

const CustomInputWrapper = styled.div``;

export default CustomInput;
