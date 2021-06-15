import React from 'react';
import styled from 'styled-components';
import ExperienceForm from '../../../../components/Experience/ExperienceForm';

const Experience = () => {
  return (
    <ExperienceWrapper>
      <ExperienceForm />
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.section`
  display: block;
`;

export default Experience;
