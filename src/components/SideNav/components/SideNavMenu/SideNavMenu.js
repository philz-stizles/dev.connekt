import React from 'react';
import PropTypes from 'prop-types';
import SidebarMenuItem from '../SideNavMenuItem/SideNavMenuItem';
import SidebarMenuTitle from '../SideNavMenuTitle/SideNavMenuTitle';
import { SideNavMenuWrapper } from './SideNavMenu.styles';

const SidebarMenu = ({ title, items }) => {
  return (
    <SideNavMenuWrapper>
      {title && <SidebarMenuTitle title={title} />}
      {items.map(({ id, icon, text, items }) => (
        <SidebarMenuItem
          key={id}
          href={id}
          color="#a5aaad"
          icon={icon}
          text={text}
          items={items}
        />
      ))}
    </SideNavMenuWrapper>
  );
};

SidebarMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

export default SidebarMenu;
