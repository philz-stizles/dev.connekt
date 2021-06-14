import styled from 'styled-components';

export const SideNavMenuItemWrapper = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    background: ${(props) => (props.isActive ? '#F3F4F4' : 'transparent')};
    border-left: ${(props) =>
      props.isActive ? '3px solid #5D55FA' : '5px solid transparent'};
    color: ${(props) => (props.isActive ? '#5D55FA' : '#000000')};
    align-items: center;
    padding: 0.7rem 2.5rem 0.7rem 1.5rem;
    font-weight: 500;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.2s ease;

    span {
      display: inline-flex;
      align-items: center;
    }

    svg {
      display: inline-block;
      font-size: 2rem;
      margin-right: 1rem;
      min-width: 2.5rem;
      line-height: 1;
      vertical-align: middle;
    }
  }

  .is-active {
    background: #f3f4f4;
    border-left: 3px solid #5d55fa;
    color: #5d55fa;
  }
`;
