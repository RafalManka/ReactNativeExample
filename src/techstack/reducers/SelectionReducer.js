import { Ids } from '../../../assets';

export default (state = null, action) => {
  switch (action.type) {
    case Ids.actions.selectLibrary:
      console.log(`id of selected library was changed to ${action.payload}`);
      return action.payload;
    default:
      console.log(`id of selected library IS ${state}`);
      return state;
  }
};
