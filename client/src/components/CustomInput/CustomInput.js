import React from 'react';
import styled from 'styled-components';

const CustomInput = ({ type, error, description, label, ...rest }) => {
  return (
    <CustomInputWrapper>
      {label && <label htmlFor={label}>{label}</label>}
      {type === 'textarea' ? (
        <textarea {...rest} id={label} />
      ) : (
        <input
          type={type}
          {...rest}
          className={`${error ? 'error' : ''}`}
          id={label}
        />
      )}
      {error && <small className="input-error-msg">{error}</small>}
      {description && (
        <small className="input-description">{description}</small>
      )}
    </CustomInputWrapper>
  );
};

const CustomInputWrapper = styled.div`
  position: relative;
  // margin-bottom: 1.6rem;
  margin-bottom: 2rem;

  input[type='text'],
  input[type='date'],
  input[type='search'],
  input[type='email'],
  textarea {
    width: 100%;
    // height: 3.4rem;
    padding: 0.6rem 1.2rem;
    color: #3f3f44;
    background-color: #fff;
    background-image: none;
    border: 1px solid #cfd7e6;
    border-radius: 4px;
    overflow: visible;
    box-shadow: inset 0 1px 2px rgb(207 215 230 / 40%);
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }

  input[type='checkbox'] {
    margin: 0 0 0 2rem;
  }

  input:focus,
  textarea:focus {
    border-color: #79589f;
    box-shadow: inset 0 1px 2px rgb(207 215 230 / 20%),
      0 0 4px rgb(121 88 159 / 30%);
  }

  input.error {
    border-color: #d64242;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  }

  .input-error-msg {
    position: absolute;
    top: 4px;
    right: 1px;
    padding: 0.6rem 1rem;
    background: #fff;
    pointer-events: none;
    font-size: 1.1rem;
    font-weight: 700;
    color: #de0a0a;
  }

  .input-description {
  }
`;

export default CustomInput;
