import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { workspaceById } from 'store/selectors/workspaces';

import Icon from 'components/shared/Icon';
import Dropdown from 'components/shared/Dropdown';
import ChannelMember from './ChannelMember';

function Heading(props) {
  const {
    channel,
    workspaceId,
  } = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const workspace = useSelector((state) => workspaceById(state, workspaceId));

  const numOfMembers = workspace?.users?.length || 0;

  const toggleDropdown = () => {
    setDropdownOpen((value) => !value);
  };

  return (
    <div className="channel-heading">
      <div className="subheading no-margin">
        <Icon
          name="hash"
          className="svg-baseline"
        />
        <span>
          {channel.name}
        </span>
      </div>

      <div>
        <Dropdown
          open={dropdownOpen}
          toggle={toggleDropdown}
          menuStickTo="right"
          triggerElement={(
            <span className="members-count">
              {`${numOfMembers} ${numOfMembers === 1 ? 'member' : 'members'}`}
            </span>
          )}
        >
          {workspace?.users?.map((userId) => (
            <ChannelMember
              key={userId}
              userId={userId}
            />
          ))}
        </Dropdown>
      </div>
    </div>
  );
}

Heading.defaultProps = {
  channel: { name: '' },
  workspaceId: null,
};

Heading.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string,
  }),
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Heading;
