import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/shared/Icon';

function MessagePane(props) {
  const {
    placeholder,
    onSend,
    disabled,
  } = props;

  const inputRef = useRef();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // TODO: fix this workaround
    setTimeout(() => {
      inputRef?.current.focus();
    }, 50);
  }, []);

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
        disabled={disabled}
        ref={inputRef}
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
  disabled: false,
};

MessagePane.propTypes = {
  placeholder: PropTypes.string,
  onSend: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default MessagePane;
