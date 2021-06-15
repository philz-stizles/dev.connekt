import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const { alerts } = useSelector((state) => state.alert);

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(({ id, type, msg }) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          key={id}
          className={`alert alert-${type}`}
        >
          {msg}{' '}
          <span>
            <i className="fa fa-close"></i>
          </span>
        </div>
      );
    })
  );
};

export default Alert;
