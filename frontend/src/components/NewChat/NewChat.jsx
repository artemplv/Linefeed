import React from 'react';
import {
  useParams,
} from 'react-router-dom';

import MessageComposerSearchField from 'components/MessageComposerSearchField';
import MessagePane from 'components/shared/MessagePane';
import Heading from './Heading';

const noop = () => {};

function NewChat() {
  const {
    workspaceId,
  } = useParams();

  return (
    <div className="chat-page">
      <div className="chat-page-content new-chat-page-content">
        <div>
          <Heading />

          <MessageComposerSearchField
            workspaceId={workspaceId}
            onChange={() => {}}
          />
        </div>

        <MessagePane
          placeholder="Start a new message"
          onSend={noop}
          disabled
        />
      </div>
    </div>
  );
}

export default NewChat;
