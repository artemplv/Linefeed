import React from 'react';
import PropTypes from 'prop-types';

function ComingSoonPlaceholder(props) {
  const {
    featureName,
  } = props;

  return (
    <div className="coming-soon-page">
      <p className="subheading">
        {`${featureName} feature is coming soon`}
      </p>
    </div>
  );
}

ComingSoonPlaceholder.defaultProps = {
  featureName: 'This feature',
};

ComingSoonPlaceholder.propTypes = {
  featureName: PropTypes.string,
};

export default ComingSoonPlaceholder;
