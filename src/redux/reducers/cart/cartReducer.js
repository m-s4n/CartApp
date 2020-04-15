import {
  REDUCE_FROM_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../actions/cart/actionTypes";
import initialState from "./initialState";

export function cartReducer(state = initialState.cart, action) {
  let newState;
  switch (action.type) {
    case ADD_TO_CART:
      var index = findProduct(state, action.payload);
      newState = [...state];
      if (index < 0) {
        newState.push({
          id: action.payload.id,
          productName: action.payload.productName,
          unitPrice: action.payload.unitPrice,
          quantity: 1,
        });
      } else {
        newState[index]["quantity"] += 1;
      }
      return newState;
    case REMOVE_FROM_CART:
      newState = state.filter((item) => {
        return item.id !== action.payload.id;
      });
      return newState;
    case REDUCE_FROM_CART:
      let position = findProduct(state, action.payload);
      newState = [...state];
      if (newState[position]["quantity"] > 1) {
        newState[position]["quantity"] -= 1;
      } else {
        newState.splice(position, 1);
      }
      return newState;
    default:
      return state;
  }
}

function findProduct(state, product) {
  return state.findIndex((item) => {
    return item.id === product.id;
  });
}
