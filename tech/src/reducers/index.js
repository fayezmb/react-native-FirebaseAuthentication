import libraryreducer from './libraryreducer';
import {combineReducers} from 'redux';
import SelectionReducer from './SelectionReducer';
export default combineReducers ({
  libraries: libraryreducer,
  selectedLibraryId: SelectionReducer
});
