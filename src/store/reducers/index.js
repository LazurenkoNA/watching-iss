import { combineReducers } from 'redux';
import issReducer from './issReducer';

const rootReducer = combineReducers({
  ISS: issReducer,
});

export default rootReducer;
