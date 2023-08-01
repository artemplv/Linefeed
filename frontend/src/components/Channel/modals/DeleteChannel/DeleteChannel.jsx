import React from 'react';
import {
  useParams,
  useNavigate,
} from 'react-router-dom';
import {
  useDispatch,
} from 'react-redux';

import { closeModal } from 'store/actions/modal';
import { deleteChannel } from 'store/actions/channels';

import Button from 'components/shared/Button';

function DeleteChannel() {
  const {
    workspaceId,
    channelId,
  } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCancel = () => {
    dispatch(closeModal());
  };

  const handleSubmit = async () => {
    await dispatch(deleteChannel(channelId));
    dispatch(closeModal());
    navigate(`/workspaces/${workspaceId}`);
  };

  return (
    <div className="delete-channel-modal-content">
      <h1 className="modal-heading">
        Delete channel
      </h1>

      <p>
        Delete this channel?
      </p>

      <div className="buttons-row">
        <Button
          variant="secondary-default"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="success"
          onClick={handleSubmit}
        >
          Delete
        </Button>
      </div>

    </div>
  );
}

export default DeleteChannel;
