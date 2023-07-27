import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props) {
  const {
    src,
    size,
    className,
  } = props;

  return (
    <div className={`avatar avatar-${size} ${className}`} />
    // <img
    //   src={src}
    //   className={`avatar avatar-${size} ${className}`}
    //   alt="avatar"
    // />
  );
}

Avatar.defaultProps = {
  size: 'm',
  className: '',
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l']),
  className: PropTypes.string,
};

export default Avatar;
