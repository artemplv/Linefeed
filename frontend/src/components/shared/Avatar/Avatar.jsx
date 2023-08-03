import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props) {
  const {
    src, // eslint-disable-line no-unused-vars
    size,
    className,
  } = props;

  if (!src) {
    return <div className={`avatar avatar-${size} ${className}`} />;
  }

  return (
    <img
      src={src}
      className={`avatar avatar-${size} ${className}`}
      alt="avatar"
    />
  );
}

Avatar.defaultProps = {
  src: null,
  size: 'm',
  className: '',
};

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l']),
  className: PropTypes.string,
};

export default Avatar;
