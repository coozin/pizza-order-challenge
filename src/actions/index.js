export function selectSize(size, basePrice){
  return {
    type: 'SIZE_SELECTED', 
    payload: {
      'size': size,
      'basePrice': basePrice,
    }
  };
}

export function totalToppings(total, toppings, maxToppings){
  return {
    type: 'TOPPINGS_TOTALLED', 
    payload: {
      'totalToppings': total,
      'toppingsSelected': toppings,
      'maxToppings': maxToppings
    }
  };
}

export function addPizza(size, base, toppingsSelected, toppingsPrice, pizzaTotal){
  return {
    type: 'ADD_PIZZA', 
    payload: {
      'size': size,
      'base': base,
      'toppingsSelected': toppingsSelected,
      'toppingsPrice': toppingsPrice,
      'pizzaTotal': pizzaTotal
    }
  };
}

export function removePizza(key){
  return {
    type: 'REMOVE_PIZZA',
    payload: key
  };
}

export function clearSize(){
  return {
    type: 'SIZE_CLEAR'
  }
}

export function toppingsClear(){
  return {
    type: 'TOPPINGS_CLEAR'
  }
}