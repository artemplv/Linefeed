import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { chatById } from 'store/selectors/chats';
import { userById } from 'store/selectors/users';

import Avatar from 'components/shared/Avatar';

function Heading(props) {
  const {
    chatId,
  } = props;

  const chat = useSelector((state) => chatById(state, chatId));
  const interlocutor = useSelector((state) => userById(state, chat.interlocutorId));

  return (
    <div className="chat-heading">
      <div className="subheading no-margin">
        <Avatar
          src={interlocutor?.pictureUrl}
          size="s"
        />
        <span>
          {interlocutor.fullName}
        </span>
      </div>
    </div>
  );
}

Heading.defaultProps = {
  chatId: null,
};

Heading.propTypes = {
  chatId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Heading;
