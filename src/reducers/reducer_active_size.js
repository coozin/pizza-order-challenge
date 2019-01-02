export default function(state = null, action){
  switch(action.type){
    case 'SIZE_SELECTED':
      return action.payload;
    case 'SIZE_CLEAR':
      return null;
  }
  
  return state;
}