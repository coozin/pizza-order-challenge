import { combineReducers } from 'redux';
import SizeReducer from './reducer_active_size';
import TotalToppingsReducer from './reducer_total_toppings';
import AddPizza from './reducer_add_pizza';
// import RemovePizza from './reducer_remove_pizza';

const rootReducer = combineReducers({
  sizeSelected: SizeReducer,
  totalToppings: TotalToppingsReducer,
  addPizza: AddPizza,
});

export default rootReducer;
