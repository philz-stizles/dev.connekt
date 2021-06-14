import React from 'react';

// Styles
import { ErrorPageWrapper } from './Error.styles';
import CustomButton from '../../components/CustomButton/CustomButton';

const Error = (props) => {
  return (
    <ErrorPageWrapper>
      <div>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <CustomButton link="/">Back home</CustomButton>
      </div>
    </ErrorPageWrapper>
  );
};

export default Error;
