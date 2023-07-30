import React from 'react';
import { useSelector } from 'react-redux';

import SectionWrapper from './SectionWrapper';

function WorkspaceSection(props) {
  const {
    workspaceId,
  } = props;

  const workspace = useSelector((state) => state.workspaces.byId[workspaceId]);

  return (
    <SectionWrapper>
      {
        workspace && <h4>{workspace.name}</h4>
      }
    </SectionWrapper>
  );
}

export default WorkspaceSection;
