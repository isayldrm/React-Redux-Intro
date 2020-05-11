import * as actionTypes from "./actionTypes";

export function addToCart(cartItem) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: cartItem, //sepetteki her bir eleman
  };
}

export function removeFromCart(product){
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:product
    }
}
