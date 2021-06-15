import React from 'react';
import styled from 'styled-components';

const EducationList = ({ onClick }) => {
  return (
    <EducationListWrapper>
      <div className="list-header"></div>
    </EducationListWrapper>
  );
};

const EducationListWrapper = styled.div`
  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default EducationList;
