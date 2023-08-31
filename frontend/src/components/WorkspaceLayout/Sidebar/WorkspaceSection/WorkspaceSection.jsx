import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { openModal } from 'store/actions/modal';

import { workspaceById } from 'store/selectors/workspaces';

import Dropdown from 'components/shared/Dropdown';
import NewMessageButton from 'components/shared/NewMessageButton';
import SectionWrapper from './SectionWrapper';

function WorkspaceSection(props) {
  const {
    workspaceId,
  } = props;

  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const workspace = useSelector((state) => workspaceById(state, workspaceId));
  const sessionUserId = useSelector((state) => state.session.user?.id);

  const toggleDropdown = () => {
    setDropdownOpen((value) => !value);
  };

  const handleEdit = () => {
    setDropdownOpen(false);
    dispatch(openModal('edit-workspace', { workspaceId }));
  };

  const handleDelete = () => {
    setDropdownOpen(false);
    dispatch(openModal('delete-workspace', { workspaceId, workspaceName: workspace.name }));
  };

  return (
    <SectionWrapper>
      {
        workspace && (
          <div className="workspace-wrapper">
            <Dropdown
              open={dropdownOpen}
              toggle={toggleDropdown}
              triggerElement={<h4>{workspace.name}</h4>}
            >
              <Dropdown.MenuLink
                to={`/workspaces/${workspaceId}`}
                onClick={toggleDropdown}
              >
                Workspace homepage
              </Dropdown.MenuLink>
              {
                sessionUserId === workspace.ownerId && (
                  <Dropdown.MenuButton
                    onClick={handleEdit}
                  >
                    Edit workspace
                  </Dropdown.MenuButton>
                )
              }
              {
                sessionUserId === workspace.ownerId && (
                  <Dropdown.MenuButton
                    onClick={handleDelete}
                  >
                    Delete workspace
                  </Dropdown.MenuButton>
                )
              }
              <Dropdown.MenuLink to="/workspaces">
                Switch workspaces
              </Dropdown.MenuLink>
            </Dropdown>

            <NewMessageButton />
          </div>
        )
      }
    </SectionWrapper>
  );
}

WorkspaceSection.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default WorkspaceSection;
