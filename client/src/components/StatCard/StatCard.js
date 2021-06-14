import React from 'react';
import PropTypes from 'prop-types';
import { StatCardWrapper } from './StatCard.styles';

const StatCard = ({ icon, stat, label, color }) => {
  return (
    <StatCardWrapper>
      <span className={color}>{icon}</span>
      <div>
        <h3>{stat}</h3>
        <p>{label}</p>
      </div>
    </StatCardWrapper>
  );
};

StatCard.propTypes = {
  icon: PropTypes.any,
  stat: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default StatCard;
