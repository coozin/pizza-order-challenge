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