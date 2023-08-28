import React from 'react';
import PropTypes from 'prop-types';

import {
  useSelector,
} from 'react-redux';

import { chatById } from 'store/selectors/chats';
import { userById } from 'store/selectors/users';

import Avatar from 'components/shared/Avatar';

const defaultDescription = `
  This is your space. Draft messages, list your to-dos, or keep links and files handy.
  You can also talk to yourself here, but please bear in mind you'll have to supply both sides of the conversation.
`;

function ChatInfo(props) {
  const {
    chatId,
  } = props;

  const chat = useSelector((state) => chatById(state, chatId));
  const interlocutor = useSelector((state) => userById(state, chat.interlocutorId));
  const currentUserId = useSelector((state) => state.session?.user?.id);

  const description = interlocutor.id === currentUserId
    ? defaultDescription
    : `This conversation is just between ${interlocutor.fullName} and you.`;

  return (
    <div className="chat-main-info">
      <div className="flex-row align-center gap-1">
        <Avatar
          src={interlocutor?.pictureUrl}
          size="l"
        />
        <span className="interlocutor-name">
          {interlocutor.fullName}
        </span>
      </div>

      <span className="chat-description">
        {description}
      </span>
    </div>
  );
}

ChatInfo.propTypes = {
  chatId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ChatInfo;
