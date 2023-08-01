import React from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from 'store/actions/modal';

import Button from 'components/shared/Button';

function ChannelInfo(props) {
  const {
    channel,
  } = props;

  const dispatch = useDispatch();

  const onEditDescription = () => {
    dispatch(openModal('edit-channel-description'));
  };

  const channelName = channel.name || '';
  const channelDescription = channel.description || 'No description';

  return (
    <div className="channel-main-info">
      <span className="heading">
        {`👋 Welcome to the #${channelName} channel`}
      </span>

      <span className="channel-description">
        {channelDescription}
      </span>

      <Button
        variant="secondary"
        className="edit-channel-description"
        onClick={onEditDescription}
      >
        Edit description
      </Button>
    </div>
  );
}

export default ChannelInfo;
