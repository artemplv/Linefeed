import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import {
  useSelector,
} from 'react-redux';

import Heading from './Heading';

function Channel() {
  const {
    channelId,
  } = useParams();

  const channel = useSelector((state) => state.channels.byId[channelId] || {});

  return (
    <div className="channel-page">
      <div className="channel-page-content">
        <Heading name={channel.name} />
      </div>
    </div>
  );
}

export default Channel;
