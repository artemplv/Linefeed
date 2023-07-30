import React from 'react';
import PropTypes from 'prop-types';

function SectionWrapper(props) {
  const {
    children,
  } = props;

  const isPlaceholder = !children;

  return (
    <div className={`
      workspace-sidebar-section-wrapper
      ${isPlaceholder ? 'workspace-sidebar-placeholder-wrapper' : ''}
    `}
    >
      {children || <div className="item-placeholder" />}
    </div>
  );
}

SectionWrapper.defaultProps = {
  children: null,
};

SectionWrapper.propTypes = {
  children: PropTypes.element,
};

export default SectionWrapper;
