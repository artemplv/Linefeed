import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { channelById } from 'store/selectors/channels';

import Icon from 'components/shared/Icon';

function ChannelSearchResult(props) {
  const {
    channelId,
    workspaceId,
  } = props;

  const navigate = useNavigate();

  const channel = useSelector((state) => channelById(state, channelId));

  const handleClick = async () => {
    navigate(`/workspaces/${workspaceId}/channels/${channelId}`);
  };

  return (
    <button
      type="button"
      className="search-result-item no-margin"
      onMouseDown={handleClick}
    >
      <Icon
        name="hash"
        className="search-result-channel-icon"
      />

      <span>
        {channel.name}
      </span>
    </button>
  );
}

ChannelSearchResult.propTypes = {
  channelId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ChannelSearchResult;
