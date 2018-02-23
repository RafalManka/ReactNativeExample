import { Ids } from '../../../assets';

export const selectLibrary = (libraryId) => ({
  type: Ids.actionSelectLibrary,
  payload: libraryId
});
