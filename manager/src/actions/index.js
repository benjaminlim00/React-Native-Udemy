import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER,
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});


export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  Actions.main();
};

export const loginUserFailed = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_FAILED,
    payload: user,
  });
};

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_USER });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          Alert.alert('new user created!');
          setTimeout(loginUserSuccess(dispatch, user),
            20000);
        })
        .catch(() => loginUserFailed(dispatch));
    });
};
