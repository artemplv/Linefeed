import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import {
  useDispatch,
} from 'react-redux';

import { searchWorkspaceDebounced } from 'store/actions/workspaces';

import UserSearchResult from './UserSearchResult';
import ChannelSearchResult from './ChannelSearchResult';

function MessageComposerSearchField(props) {
  const {
    workspaceId,
  } = props;

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const [userIds, setUserIds] = useState([]);
  const [channelIds, setChannelIds] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const searchCallback = (data) => {
    setUserIds(data.userIds);
    setChannelIds(data.channelIds);
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);

    if (event.target.value.trim()) {
      dispatch(searchWorkspaceDebounced(workspaceId, event.target.value, searchCallback));
    }
  };

  return (
    <div className="message-composer-search">
      <label>
        To:
        <input
          type="text"
          placeholder="#a-channel, @somebody, or somebody@example.com"
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={inputRef}
        />
      </label>
      {
        (inputFocused && inputValue) && (
          <div className="message-composer-search-dropdown">
            {
              userIds.length === 0 && channelIds.length === 0 && (
                <span className="no-results-placeholder">
                  No results
                </span>
              )
            }
            <ul>
              {
                userIds.map((id) => (
                  <li key={`user-${id}`}>
                    <UserSearchResult
                      userId={id}
                      workspaceId={workspaceId}
                    />
                  </li>
                ))
              }
              {
                channelIds.map((id) => (
                  <li key={`channel-${id}`}>
                    <ChannelSearchResult
                      channelId={id}
                      workspaceId={workspaceId}
                    />
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  );
}

MessageComposerSearchField.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MessageComposerSearchField;
