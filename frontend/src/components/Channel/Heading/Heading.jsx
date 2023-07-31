import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/shared/Icon';

function Heading(props) {
  const {
    name,
  } = props;

  return (
    <div className="channel-heading">
      <div className="subheading no-margin">
        <Icon
          name="hash"
          className="svg-baseline"
        />
        <span>
          {name}
        </span>
      </div>
    </div>
  );
}

Heading.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Heading;
