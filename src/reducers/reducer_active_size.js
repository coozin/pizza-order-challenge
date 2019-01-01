export default function(state = null, action){
  switch(action.type){
    case 'SIZE_SELECTED':
      console.log('size selected reducer hit: ', action.payload)
      return action.payload; 
  }
  
  return state;
}