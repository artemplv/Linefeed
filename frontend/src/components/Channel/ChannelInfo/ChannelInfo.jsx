import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { openModal } from 'store/actions/modal';
import { channelById } from 'store/selectors/channels';

import Button from 'components/shared/Button';

function ChannelInfo(props) {
  const {
    channelId,
  } = props;

  const dispatch = useDispatch();
  const channel = useSelector((state) => channelById(state, channelId));

  const onEditDescription = () => {
    dispatch(openModal('edit-channel-description'));
  };

  const onDelete = () => {
    dispatch(openModal('delete-channel'));
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
      <Button
        variant="secondary"
        className="delete-channel"
        onClick={onDelete}
      >
        Delete channel
      </Button>
    </div>
  );
}

export default ChannelInfo;
