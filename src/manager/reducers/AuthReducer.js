import { Ids } from '../../../assets';

const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Ids.actions.emailChanged:
        console.log(`Email changed to ${action.payload}`);
      return { ...state, email: action.payload };
    case Ids.actions.passwordChanged:
        console.log(`Password changed to ${action.payload}`);
        return { ...state, password: action.payload };
    default:
      return state;
  }
};
