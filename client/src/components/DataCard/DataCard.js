import React from 'react';
import PropTypes from 'prop-types';
import { DataCardWrapper } from './DataCard.styles';

const DataCard = ({ label, children }) => {
  return <DataCardWrapper label={label}>{children}</DataCardWrapper>;
};

DataCard.propTypes = {
  label: PropTypes.string,
  children: PropTypes.number.isRequired,
};

export default DataCard;
