import { combineReducers } from 'redux';
import SizeReducer from './reducer_active_size';

const rootReducer = combineReducers({
  sizeSelected: SizeReducer,
});

export default rootReducer;
