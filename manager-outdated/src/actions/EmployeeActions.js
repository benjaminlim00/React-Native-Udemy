import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

export const employeesFetch = () => (dispatch) => {
  const { currentUser } = firebase.auth();
  firebase.database.ref(`/users/${currentUser.uid}/employees`).om('value', (snapshot) => {
    dispatch({
      type: EMPLOYEE_FETCH_SUCCESS,
      payload: snapshot.val()
    });
  });
};
