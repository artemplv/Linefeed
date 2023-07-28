import React from 'react';
import {
  useSearchParams,
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
  const [searchParams, setSearchParams] = useSearchParams();

  const currentStep = searchParams.get('step');

  const setNextStep = (value) => () => setSearchParams({ step: value }, { replace: true });

  const stepData = STEPS_PARAMS[currentStep];

  if (!stepData) {
    return <Navigate to="/workspaces" replace />;
  }

  const currentStepIndex = STEPS_PARAMS[currentStep].index;
  const totalSteps = Object.keys(STEPS_PARAMS).length;

  return (
    <>
      <p>
        {`Step ${currentStepIndex} of ${totalSteps}`}
      </p>

      <stepData.Component
        onNextStep={setNextStep(stepData.nextStep)}
      />
    </>
  );
}

export default NewWorkspace;
