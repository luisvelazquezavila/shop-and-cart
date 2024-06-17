import { useReducer } from "react"
import { cartInitialState, cartReducer } from "../reducers/cart"

export default function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = product => dispatch({
    type: "ADD_TO_CART",
    payload: product
  });

  const removeFromCart = product => dispatch({
    type: "REMOVE_FROM_CART",
    payload: product
  });

  const clearCart = () => dispatch({
    type: "CLEAR_CART"
  });

  const subtractAmount = product => dispatch({
    type: "SUBTRACT_AMOUNT",
    payload: product
  });

  return { state, addToCart, removeFromCart, clearCart, subtractAmount };
}