export default function(state = [], action){
    switch(action.type){
      case 'ADD_PIZZA':
        console.log('pizza add reducer hit: ', action.payload)
        return [...state, action.payload]; 
    }
    
    return state;
  }