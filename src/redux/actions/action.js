import * as actionTypes from './types';
import firebase from 'react-native-firebase';
export const Login = (data, navigation) => async dispatch => {
  alert('signup chal gya ha ');
  // dispatch({
  //   type: actionTypes.SET_USER_DATA,
  //   payload: data,

  // });
};
export const Signup = (userData, navigation) => async dispatch => {
  // alert('signup chal gya ha ');
  // console.warn('this is user daata', userData);
  dispatch({type: actionTypes.START_LOADING});
  firebase
    .auth()
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then(res => {
      console.log('not login');
    });
};
