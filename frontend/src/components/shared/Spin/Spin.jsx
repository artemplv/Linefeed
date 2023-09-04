import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/shared/Icon';

function Spin(props) {
  const {
    spinning,
    children,
  } = props;

  return (
    <div className={`spin-container ${spinning ? 'spinning' : ''}`}>
      <div className="spin-content">
        {children}
      </div>
      <div className="spin-spinner-wrapper">
        <Icon
          name="loader"
          className="spin-loading-icon"
        />
      </div>
    </div>
  );
}

Spin.defaultProps = {
  spinning: false,
  children: null,
};

Spin.propTypes = {
  spinning: PropTypes.bool,
  children: PropTypes.node,
};

export default Spin;
