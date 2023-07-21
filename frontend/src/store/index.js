import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({});

const configureStore = (preloadedState = {}) => createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
