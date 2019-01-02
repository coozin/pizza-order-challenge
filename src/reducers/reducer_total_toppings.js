export default function(state = null, action){
  switch(action.type){
    case 'TOPPINGS_TOTALLED':
      return action.payload;
    case 'TOPPINGS_CLEAR':
      return null;
  }
  
  return state;
}