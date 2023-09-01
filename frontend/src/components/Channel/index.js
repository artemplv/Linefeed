import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { channelById } from 'store/selectors/channels';

import Channel from './Channel';
import NotFound from './NotFound';

import './styles.scss';

function ChannelWrapper() {
  const {
    channelId,
  } = useParams();

  const channel = useSelector((state) => channelById(state, channelId));

  if (!channel.id) {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <NotFound />
    );
  }

  return (
    <Channel />
  );
}

export default ChannelWrapper;
