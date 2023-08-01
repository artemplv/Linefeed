import React, {
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { closeModal } from 'store/actions/modal';
import { updateChannel } from 'store/actions/channels';

import Button from 'components/shared/Button';

function EditDescription() {
  const {
    channelId,
  } = useParams();

  const dispatch = useDispatch();

  const channel = useSelector((state) => state.channels.byId[channelId]);

  const [inputValue, setInputValue] = useState(channel?.description || '');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onCancel = () => {
    dispatch(closeModal());
  };

  const handleSubmit = () => {
    dispatch(updateChannel(channelId)({
      description: inputValue,
    }));
    dispatch(closeModal());
  };

  return (
    <div className="edit-channel-description-modal-content">
      <h1 className="modal-heading">
        Edit description
      </h1>

      <div className="input-text-wrapper">
        <textarea
          className="input-text"
          value={inputValue}
          onChange={handleChange}
        />
      </div>

      <span className="modal-description">
        Let people know what this channel is for.
      </span>

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
          Save
        </Button>
      </div>

    </div>
  );
}

export default EditDescription;
