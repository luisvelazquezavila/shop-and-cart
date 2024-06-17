import { createContext } from "react"
import { PropTypes } from "prop-types"
import useCartReducer from "../hooks/useCartReducer";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const { state, addToCart, removeFromCart, clearCart, subtractAmount } = useCartReducer();

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart,
      subtractAmount,
    }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.array
}