import React from 'react';

import Button from 'components/shared/Button';

function ChannelInfo(props) {
  const {
    channel,
  } = props;

  const channelName = channel.name || '';

  return (
    <div className="channel-main-info">
      <span className="heading">
        {`👋 Welcome to the #${channelName} channel`}
      </span>

      <span className="channel-description">
        {`This channel is for everything #${channelName}. Hold meetings, share docs, and make
        decisions together with your team.`}
      </span>

      <Button
        variant="secondary"
        className="edit-channel-description"
      >
        Edit description
      </Button>
    </div>
  );
}

export default ChannelInfo;
