import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Avatar from 'components/shared/Avatar';

function WorkspaceItem(props) {
  const {
    workspaceId,
  } = props;

  const workspace = useSelector((state) => state.workspaces.byId[workspaceId]);
  const numOfMembers = workspace?.users?.length || 0;

  return (
    <div className="workspaces-list-item">
      <div className="workspaces-list-item-details">
        <Avatar
          className="workspace-avatar"
          src={workspace?.pictureUrl}
        />

        <div className="workspace-detail-content">
          <span className="workspace-title">
            {workspace?.name}
          </span>
          <span className="workspace-members-count">
            {`${numOfMembers} ${numOfMembers === 1 ? 'member' : 'members'}`}
          </span>
        </div>

        <Link
          to={`/workspaces/${workspace?.id}`}
          className="button uppercase launch-button"
        >
          Launch Linefeed
        </Link>
      </div>
    </div>
  );
}

WorkspaceItem.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default WorkspaceItem;
