export const cartInitialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  SUBTRACT_AMOUNT: "SUBTRACT_AMOUNT",
  PAY: "PAY"
};

export const updateLocalStorage = state => {
  localStorage.setItem("cart", JSON.stringify(state));
}

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartActionTypes.ADD_TO_CART: {
      const { id } = payload;
      const productInCartIndex = state.findIndex(item => item.id === id);

      if (productInCartIndex >= 0) {

        // Usando structuredClone   
        // const newState = structuredClone(state);
        // newState[productInCartIndex].quantity += 1;

        // Usando map 
        // const newState = state.map(item => {
        //   if (item.id === id) {
        //     return {
        //       ...item,
        //       quantity: item.quantity + 1
        //     }
        //   }

        //   return item;
        // })

        // Usando spread operator y slice
        const newState = [
          ...state.slice(0, productInCartIndex),
          { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
          ...state.slice(productInCartIndex + 1)
        ]
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState);
      return newState;
    }   
    case cartActionTypes.REMOVE_FROM_CART: {
      const { id } = payload;
      const newState = state.filter(item => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case cartActionTypes.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }
    case cartActionTypes.SUBTRACT_AMOUNT: {
      const { id } = payload;
      const productInCartIndex = state.findIndex(item => item.id === id);

      if (payload.quantity > 1) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity -= 1;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = state.filter(item => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case cartActionTypes.PAY: {
      alert("Compra realizada con éxito!");
    }
  }
  return state;
}