import React from 'react';
import styled from 'styled-components';

const ContentTitle = ({ title, subTitle, icon, actions }) => {
  return (
    <ContentTitleWrapper>
      <h2>{title}</h2>
      <div className="actions">{actions.map((action) => action)}</div>
    </ContentTitleWrapper>
  );
};

const ContentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.2rem;

  h2 {
    font-size: 2.4rem;
    font-weight: 400;
    margin: 0.7rem 0;
  }

  .actions {
    margin-left: auto;
  }
`;

export default ContentTitle;
