import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/shared/Icon';

function Heading(props) {
  const {
    channel,
  } = props;

  return (
    <div className="channel-heading">
      <div className="subheading no-margin">
        <Icon
          name="hash"
          className="svg-baseline"
        />
        <span>
          {channel.name}
        </span>
      </div>
    </div>
  );
}

Heading.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Heading;
