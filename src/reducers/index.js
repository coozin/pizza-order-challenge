import { combineReducers } from 'redux';
import SizeReducer from './pizza-size-reducer';

const rootReducer = combineReducers({
  sizes: SizeReducer,
});

export default rootReducer;
