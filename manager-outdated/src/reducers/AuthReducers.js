import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  user: '',
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload };
    case LOGIN_USER_FAILED:
      return { ...state, error: 'Authentication Failed.', loading: false };
    default:
      return state;
  }
};
