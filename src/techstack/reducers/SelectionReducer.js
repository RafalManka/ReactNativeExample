import { Ids } from '../../../assets';

export default (state, action) => {
  switch (action) {
    case Ids.actionSelectLibrary:
      return state;
    default:
      return null;
  }
};
