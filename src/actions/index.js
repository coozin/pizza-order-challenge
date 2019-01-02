export function selectSize(size, basePrice){
  console.log('select size action: ', size, basePrice)
  return {
    type: 'SIZE_SELECTED', 
    payload: {
      'size': size,
      'basePrice': basePrice,
    }
  };
}

export function totalToppings(total, toppings){
  console.log('totalToppings action total: ', total)
  console.log('totalToppings action toppings: ', total)
  return {
    type: 'TOPPINGS_TOTALLED', 
    payload: {
      'totalToppings': total,
      'toppingsSelected': toppings
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