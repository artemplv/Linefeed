import React from 'react';
import {
  useSearchParams,
  useParams,
  Navigate,
} from 'react-router-dom';

import * as Steps from './steps';

const STEPS_PARAMS = {
  'setup-workspace-name': {
    Component: Steps.SetupWorkspaceName,
    nextStep: 'add-teammates',
    index: 1,
  },
  'add-teammates': {
    Component: Steps.AddUsers,
    nextStep: 'create-channel',
    index: 2,
  },
  'create-channel': {
    Component: Steps.CreateChannel,
    index: 3,
  },
};

function NewWorkspace() {
  const {
    workspaceId,
  } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const currentStep = searchParams.get('step');

  const setNextStep = (value) => () => setSearchParams({ step: value }/* , { replace: true } */);

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
