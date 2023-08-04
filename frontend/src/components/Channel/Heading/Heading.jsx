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
  const numOfMembers = workspace?.users?.length || 0;

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
          {`${numOfMembers} ${numOfMembers === 1 ? 'member' : 'members'}`}
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
