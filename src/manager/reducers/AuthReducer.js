import { Ids } from '../../../assets';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  progress: false,
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Ids.actions.emailChanged:
      return { ...state, email: action.payload };
    case Ids.actions.passwordChanged:
        return { ...state, password: action.payload };
    case Ids.actions.loginUserSuccess:
        return { ...state, ...INITIAL_STATE, user: action.payload };
    case Ids.actions.loginUserFail:
        return { ...state, error: 'Authentication failed', progress: false };
    case Ids.actions.loginUser:
        return { ...state, error: '', progress: true };
    default:
      return state;
  }
};
