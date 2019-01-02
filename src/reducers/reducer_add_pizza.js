export default function(state = [], action){
    switch(action.type){
      case 'ADD_PIZZA':
        console.log('pizza add reducer hit: ', action.payload)
        return [...state, action.payload];
      case 'REMOVE_PIZZA':
        console.log('pizza remove reducer hit: ', action.payload)
        return [
          ...state.slice(0, action.payload),
          ...state.slice(action.payload + 1)
        ]
    }
    
    return state;
  }