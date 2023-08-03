import React from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { formatDateTime } from 'utils';
import { openModal } from 'store/actions/modal';

import Avatar from 'components/shared/Avatar';

function Message(props) {
  const {
    messageId,
  } = props;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openModal('delete-message', { messageId }));
  };

  const message = useSelector((state) => state.messages.byId?.[messageId]);
  const user = useSelector((state) => state.users.byId?.[message?.authorId]);
  const sessionUser = useSelector((state) => state.session.user);

  const userName = `${user?.firstName || ''} ${user?.lastName || ''}`.trim();

  return (
    <div className="message-wrapper">
      <div className="main-section">
        <Avatar
          src={user?.pictureUrl}
          size="m"
        />

        <div>
          <p className="name-time">
            <b>{userName}</b>
            {' '}
            <span className="time">
              {message ? formatDateTime(message.createdAt, 'time') : ''}
            </span>
          </p>

          <p className="message-body">
            {message?.body}
          </p>
        </div>
      </div>

      {
        sessionUser?.id === user?.id && (
          <button
            type="button"
            className="delete-button"
            onClick={handleDelete}
          >
            X
          </button>
        )
      }

    </div>
  );
}

Message.propTypes = {
  messageId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Message;
