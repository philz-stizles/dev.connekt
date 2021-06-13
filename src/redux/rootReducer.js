import { combineReducers } from 'redux';

// Reducers
import authReducer from './auth/authReducer';
import alertReducer from './alert/alertReducer';
import profileReducer from './profile/profileReducer';
import postReducer from './post/postReducer';
import sidebarReducer from './sidebar/sidebarReducer';
import modalReducer from './modal/modalReducer';

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  profile: profileReducer,
  post: postReducer,
  sidebar: sidebarReducer,
  modal: modalReducer,
});

export default rootReducer;
