import React, {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getWorkspaceChannels } from 'store/actions/channels';

import ChannelItem from './ChannelItem';

function ChannelsSection(props) {
  const {
    workspaceId,
  } = props;

  const dispatch = useDispatch();

  const channels = useSelector((state) => Object.values(state.channels.byId));

  useEffect(() => {
    if (workspaceId) {
      dispatch(getWorkspaceChannels(workspaceId));
    }
  }, [workspaceId]);

  return (
    <div style={{ padding: '1rem' }}>
      <h4>Channels</h4>
      {
        channels.map((channel) => (
          <ChannelItem
            key={channel.id}
            channelId={channel.id}
            workspaceId={workspaceId}
            name={channel.name}
          />
        ))
      }
    </div>
  );
}

export default ChannelsSection;
