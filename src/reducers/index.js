import { combineReducers } from 'redux';
import SizeReducer from './reducer_active_size';
import TotalToppingsReducer from './reducer_total_toppings';

const rootReducer = combineReducers({
  sizeSelected: SizeReducer,
  totalToppings: TotalToppingsReducer
});

export default rootReducer;
