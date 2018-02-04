import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer,
  currentlySelectedLibrary: () => 0
});
