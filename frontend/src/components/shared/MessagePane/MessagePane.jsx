import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/shared/Icon';

function MessagePane(props) {
  const {
    placeholder,
    onSend,
  } = props;

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (!inputValue.trim()) {
      return;
    }

    onSend(inputValue);
    setInputValue('');
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSend();
      event.preventDefault();
    }
  };

  return (
    <div className="message-pane">
      <textarea
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyDown={handleEnter}
      />

      <button
        type="button"
        className="send-message-button"
        disabled={!inputValue}
        onClick={handleSend}
      >
        <Icon name="send" />
      </button>
    </div>
  );
}

MessagePane.defaultProps = {
  placeholder: 'Jot something down',
};

MessagePane.propTypes = {
  placeholder: PropTypes.string,
  onSend: PropTypes.func.isRequired,
};

export default MessagePane;
