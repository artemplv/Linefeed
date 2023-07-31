import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import {
  useSelector,
} from 'react-redux';

function Channel() {
  const {
    channelId,
  } = useParams();

  const channel = useSelector((state) => state.channels.byId[channelId] || {});

  return (
    <div className="channel-page">
      {`Hello from channel ${channel.name}`}
    </div>
  );
}

export default Channel;
