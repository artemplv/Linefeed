import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Icon from 'components/shared/Icon';

function Heading(props) {
  const {
    channel,
    workspaceId,
  } = props;

  const workspace = useSelector((state) => state.workspaces.byId[workspaceId]);

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

      <div>
        <span className="members-count">
          {`${workspace?.users?.length || 0} members`}
        </span>
      </div>
    </div>
  );
}

Heading.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Heading;
