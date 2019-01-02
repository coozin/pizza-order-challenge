export default function(state = null, action){
  switch(action.type){
    case 'TOPPINGS_TOTALLED':
      console.log('toppings totalled reducer hit: ', action.payload)
      return action.payload;
    case 'TOPPINGS_CLEAR':
      console.log('clear toppings');
      return null;
  }
  
  return state;
}