import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

//Cart actions
const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
};

//Cart reducer to handle state updates
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART:
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }

      return [...state, action.payload];

    case CART_ACTIONS.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case CART_ACTIONS.UPDATE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case CART_ACTIONS.CLEAR_CART:
      return [];

    default:
      return state;
  }
};

//CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  //Calculate total price
  const total = cart.reduce((sum, item) => {
    const itemPrice = item.discountPercentage
      ? item.price - (item.price * item.discountPercentage) / 100
      : item.price;
    return sum + itemPrice * item.quantity;
  }, 0);

  //Get total number of items
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, dispatch, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

//Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a Cartprovider");
  }
  return context;
};
