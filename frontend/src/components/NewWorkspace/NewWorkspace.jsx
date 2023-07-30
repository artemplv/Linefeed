import React, {
  useEffect,
} from 'react';
import {
  useOutletContext,
  useSearchParams,
  useParams,
  Navigate,
} from 'react-router-dom';

import { sidebarConstants } from 'constants';

import * as Steps from './steps';

const STEPS_PARAMS = {
  'setup-workspace-name': {
    index: 1,
    Component: Steps.SetupWorkspaceName,
    sidebarSections: [],
    nextStep: 'add-teammates',
  },
  'add-teammates': {
    index: 2,
    Component: Steps.AddUsers,
    sidebarSections: [
      sidebarConstants.WORKSPACE_SIDEBAR_SECTION,
      sidebarConstants.CHATS_SIDEBAR_SECTION,
    ],
    nextStep: 'create-channel',
  },
  'create-channel': {
    index: 3,
    Component: Steps.CreateChannel,
    sidebarSections: [
      sidebarConstants.WORKSPACE_SIDEBAR_SECTION,
      sidebarConstants.CHATS_SIDEBAR_SECTION,
    ],
  },
};

function NewWorkspace() {
  const {
    setWorkspaceCreationMode,
    setSidebarSections,
  } = useOutletContext();

  const {
    workspaceId,
  } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const currentStep = searchParams.get('step');

  useEffect(() => {
    setWorkspaceCreationMode(true);

    return () => {
      setWorkspaceCreationMode(false);
      setSidebarSections(sidebarConstants.DEFAULT_SIDEBAR_SECTIONS);
    };
  }, []);

  useEffect(() => {
    if (currentStep) {
      const {
        sidebarSections = [],
      } = STEPS_PARAMS[currentStep];

      setSidebarSections(sidebarSections);
    }
  }, [
    currentStep,
  ]);

  const setNextStep = (nextStepName) => () => {
    setSearchParams({ step: nextStepName }/* , { replace: true } */);
  };

  const stepData = STEPS_PARAMS[currentStep];

  if (!stepData) {
    return <Navigate to={`/workspaces/${workspaceId}/new?step=setup-workspace-name`} replace />;
  }

  const currentStepIndex = STEPS_PARAMS[currentStep].index;
  const totalSteps = Object.keys(STEPS_PARAMS).length;

  return (
    <div className="setup-page">
      <div className="setup-page-content">
        <p className="step-counter">
          {`Step ${currentStepIndex} of ${totalSteps}`}
        </p>

        <stepData.Component
          workspaceId={workspaceId}
          onNextStep={setNextStep(stepData.nextStep)}
        />
      </div>
    </div>
  );
}

export default NewWorkspace;
