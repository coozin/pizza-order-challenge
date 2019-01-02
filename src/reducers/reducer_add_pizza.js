export default function(state = [], action){
    switch(action.type){
      case 'ADD_PIZZA':
        return [...state, action.payload];
      case 'REMOVE_PIZZA':
        return [
          ...state.slice(0, action.payload),
          ...state.slice(action.payload + 1)
        ]
    }
    
    return state;
  }