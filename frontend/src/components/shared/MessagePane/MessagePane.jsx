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
  const [focused, setFocused] = useState(false);

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

  return (
    <div className={`message-pane ${focused ? 'focused' : ''}`}>
      <textarea
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
      />

      <div className="bottom-toolbar">
        <button
          type="button"
          className="send-message-button"
          disabled={!inputValue}
          onClick={handleSend}
        >
          <Icon name="send" />
        </button>
      </div>
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
