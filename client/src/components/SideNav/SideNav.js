import React from 'react';
import SideNavMenu from './components/SideNavMenu/SideNavMenu';
import PropTypes from 'prop-types';
import { SideNavWrapper } from './SideNav.styles';

const SideNav = ({ menuBlueprint }) => {
  return (
    <SideNavWrapper>
      <div className="SideNav__sticky">
        {menuBlueprint.map(({ title, items }, i) => (
          <SideNavMenu key={i} title={title} items={items} />
        ))}
      </div>
    </SideNavWrapper>
  );
};

SideNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menuBlueprint: PropTypes.array.isRequired,
};

export default SideNav;
