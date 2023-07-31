import React from 'react';

import Avatar from 'components/shared/Avatar';

function ChatItem(props) {
  const {
    chatName,
  } = props;

  return (
    <div className="flex-row align-center" style={{ padding: '0.5rem 0', gap: '0.5rem' }}>
      <Avatar
        size="xs"
      />
      <p className="no-margin">
        {chatName}
      </p>
    </div>
  );
}

export default ChatItem;
