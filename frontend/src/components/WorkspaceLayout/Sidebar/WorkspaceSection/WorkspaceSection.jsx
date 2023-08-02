import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Dropdown from 'components/shared/Dropdown';
import SectionWrapper from './SectionWrapper';

function WorkspaceSection(props) {
  const {
    workspaceId,
  } = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((value) => !value);
  };

  const workspace = useSelector((state) => state.workspaces.byId[workspaceId]);

  return (
    <SectionWrapper>
      {
        workspace && (
          <Dropdown
            open={dropdownOpen}
            toggle={toggleDropdown}
            triggerElement={<h4>{workspace.name}</h4>}
          >
            <Dropdown.MenuLink to={`/workspaces/${workspaceId}`}>
              Workspace homepage
            </Dropdown.MenuLink>
            <Dropdown.MenuLink to="/workspaces">
              Switch workspaces
            </Dropdown.MenuLink>
          </Dropdown>
        )
      }
    </SectionWrapper>
  );
}

WorkspaceSection.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default WorkspaceSection;
