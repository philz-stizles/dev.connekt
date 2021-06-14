import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SideNavMenuItemWrapper } from './SideNavMenuItem.styles';
import { NavLink } from 'react-router-dom';

const SidebarMenuItem = ({ href, icon, text }) => {
  const { activeMenuItem } = useSelector((state) => state.sidebar);

  const isActive = activeMenuItem.includes(href);

  return (
    <SideNavMenuItemWrapper
      isActive={isActive}
      aria-hidden="true"
      onClick={(e) => {}}
    >
      <NavLink
        to={href}
        exact={href === '/dashboard'}
        activeClassName="is-active"
      >
        <span className="item-label">
          {icon}
          {text}
        </span>
        <span className="item-badge"></span>
      </NavLink>
    </SideNavMenuItemWrapper>
  );
};

SidebarMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.any,
  text: PropTypes.string.isRequired,
  items: PropTypes.array,
  hasParent: PropTypes.bool,
};

export default SidebarMenuItem;
