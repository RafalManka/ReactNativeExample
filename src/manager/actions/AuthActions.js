import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { Ids } from '../../../assets';

export const emailChanged = (text) => ({
  type: Ids.actions.emailChanged,
  payload: text
});

export const passwordChanged = (text) => ({
  type: Ids.actions.passwordChanged,
  payload: text
});

export const loginUser = ({ email, password }) => ((dispatch) => {
  dispatch({ type: Ids.actions.loginUser });

  const onSuccess = (user) => {
    dispatch({
      type: Ids.actions.loginUserSuccess,
      payload: user
    });

    Actions.startMainFlow();
  };

  const onFail = () => {
    dispatch({
      type: Ids.actions.loginUserFail
    });
  };

  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(onSuccess)
    .catch(() => {
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(onSuccess)
        .catch(onFail);
    });
});
