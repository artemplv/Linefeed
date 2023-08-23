import React, {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import PropTypes from 'prop-types';

import { getWorkspaceChannels } from 'store/actions/channels';
import { openModal } from 'store/actions/modal';
import { allChannels } from 'store/selectors/channels';

import Button from 'components/shared/Button';
import ChannelItem from './ChannelItem';

function ChannelsSection(props) {
  const {
    workspaceId,
    full,
  } = props;

  const dispatch = useDispatch();

  const channels = useSelector(allChannels);

  useEffect(() => {
    if (workspaceId) {
      dispatch(getWorkspaceChannels(workspaceId));
    }
  }, [workspaceId]);

  return (
    <div className="channels-sidebar-section">
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
      {
        full && (
          <Button
            className="new-channel-button"
            onClick={() => dispatch(openModal('create-channel'))}
          >
            + New channel
          </Button>
        )
      }
    </div>
  );
}

ChannelsSection.defaultProps = {
  full: true,
};

ChannelsSection.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  full: PropTypes.bool,
};

export default ChannelsSection;
