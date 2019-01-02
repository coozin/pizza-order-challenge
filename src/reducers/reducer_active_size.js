export default function(state = null, action){
  switch(action.type){
    case 'SIZE_SELECTED':
      console.log('size selected reducer hit: ', action.payload)
      return action.payload;
    case 'SIZE_CLEAR':
      console.log('clear size reducer hit');
      return null;
  }
  
  return state;
}