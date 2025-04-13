import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type ImageItemProps = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type CartItemProps = {
  id: number;
  unitPrice: number;
  totalPrice: number;
  image: ImageItemProps;
  title: string;
  quantity: number;
  slug: string;
};

type InitialStateProps = {
  cart: CartItemProps[];
};

// Load cart state from localStorage if exists
function loadCartFromLocalStorage() {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to load cart from localStorage", error);
    return [];
  }
}

const initialState: InitialStateProps = {
  cart: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, quantity, unitPrice } = action.payload;

      if (quantity === 0) return;

      const cartItem = state.cart.find((item) => item.id === id);

      if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.totalPrice = quantity * unitPrice;
      } else {
        state.cart.push({
          ...action.payload,
          totalPrice: quantity * unitPrice,
        });
      }

      // save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    increaseCart(state, action) {
      const { id } = action.payload;

      const cartItem = state.cart.find((item) => item.id === id);

      if (cartItem) {
        cartItem.quantity += 1;
        cartItem.totalPrice = cartItem.quantity * cartItem.unitPrice;
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decreaseCart(state, action) {
      const { id } = action.payload;

      const cartItem = state.cart.find((item) => item.id === id);

      if (cartItem) {
        if (cartItem.quantity === 1) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          cartItem.quantity -= 1;
          cartItem.totalPrice = cartItem.quantity * cartItem.unitPrice;
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeCart(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },

    startNewOrder() {
      localStorage.removeItem("cart");
      return initialState;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  increaseCart,
  decreaseCart,
  removeCart,
  startNewOrder,
} = cartSlice.actions;

export const getCart = (store: RootState) => store.cart.cart;
