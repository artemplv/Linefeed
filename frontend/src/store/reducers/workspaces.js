import {
  SET_WORKSPACE,
  SET_WORKSPACES,
} from 'store/actionTypes/workspaces';

const initialState = {
  byId: {},
  // allIds: {},
};

const workspacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKSPACE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload,
        },
      };
    case SET_WORKSPACES:
      return {
        ...state,
        byId: action.payload,
      };
    default:
      return state;
  }
};

export default workspacesReducer;
