import firebase from 'firebase';
import { Ids } from '../../../assets';

export const emailChanged = (text) => ({
  type: Ids.actions.emailChanged,
  payload: text
});

export const passwordChanged = (text) => ({
  type: Ids.actions.passwordChanged,
  payload: text
});

export const loginUser = ({ email, password }) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => console.log(user));
};
