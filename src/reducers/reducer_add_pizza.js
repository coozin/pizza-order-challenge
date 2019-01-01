export default function(state = null, action){
    switch(action.type){
      case 'ADD_PIZZA':
        console.log('pizza add reducer hit: ', action.payload)
        return action.payload; 
    }
    
    return state;
  }