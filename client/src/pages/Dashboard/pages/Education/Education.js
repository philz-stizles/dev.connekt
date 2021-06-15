import React from 'react';
import styled from 'styled-components';
import { CustomButton } from '../../../../components';
import ContentTitle from '../../../../components/ContentTitle/ContentTitle';
import EducationForm from '../../../../components/Education/EducationForm';
import EducationList from '../../../../components/Education/EducationList';

const Education = () => {
  const [mainContent, setMainContent] = React.useState('list');

  let MainContent;

  if (mainContent === 'list') {
    MainContent = <EducationList onClick={() => setMainContent('form')} />;
  }

  if (mainContent === 'form') {
    MainContent = <EducationForm onClick={() => setMainContent('list')} />;
  }

  return (
    <EducationWrapper>
      <ContentTitle
        title="Education"
        actions={
          mainContent === 'list'
            ? [
                <CustomButton onClick={() => setMainContent('form')}>
                  Add Education
                </CustomButton>,
              ]
            : []
        }
      />
      {MainContent}
    </EducationWrapper>
  );
};

const EducationWrapper = styled.section`
  display: block;
`;

export default Education;
