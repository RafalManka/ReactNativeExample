import { Ids } from '../../../assets';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Ids.actions.employeeUpdate:
      return { ...state, [action.payload.prop]: [action.payload.value] };
    default:
      return state;
  }
};
