import { Ids } from '../../../assets';

export const selectLibrary = (libraryId) => ({
  type: Ids.actions.selectLibrary,
  payload: libraryId
});
