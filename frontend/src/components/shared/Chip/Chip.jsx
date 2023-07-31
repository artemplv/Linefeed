/* eslint-disable react/prop-types */
import React from 'react';

function Chip(props) {
  const {
    children,
  } = props;

  return (
    <div className="chip">
      {children}
    </div>
  );
}

export default Chip;
