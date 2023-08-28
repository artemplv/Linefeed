import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { getUser } from 'store/actions/users';
import { userById } from 'store/selectors/users';

import Avatar from 'components/shared/Avatar';

function ChannelMember(props) {
  const {
    userId,
  } = props;

  const dispatch = useDispatch();

  const sessionUserId = useSelector((state) => state.session.user?.id);
  const user = useSelector((state) => userById(state, userId));

  const isSelf = Number(userId) === sessionUserId;

  useEffect(() => {
    if (userId && !user.id) {
      dispatch(getUser(userId));
    }
  }, [userId]);

  return (
    <div className="channel-member-item">
      <Avatar
        src={user.pictureUrl}
        size="xs"
      />
      <span className="chat-name">
        {user.fullName}
      </span>
      {
        isSelf && (
          <span className="self-user-hint">
            (you)
          </span>
        )
      }
    </div>
  );
}

ChannelMember.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ChannelMember;
