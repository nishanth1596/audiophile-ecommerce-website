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
};

type InitialStateProps = {
  cart: CartItemProps[];
};

const initialState: InitialStateProps = {
  cart: [],
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
    },

    increaseCart(state, action) {
      const { id } = action.payload;

      const cartItem = state.cart.find((item) => item.id === id);

      if (cartItem) {
        cartItem.quantity += 1;
        cartItem.totalPrice = cartItem.quantity * cartItem.unitPrice;
      }
    },

    decreaseCart(state, action) {
      const { id } = action.payload;

      const cartItem = state.cart.find((item) => item.id === id);

      if (cartItem) {
        if (cartItem.quantity === 1) {
          state.cart = state.cart.filter((item) => item.id !== id);
        }

        cartItem.quantity -= 1;
        cartItem.totalPrice = cartItem.quantity * cartItem.unitPrice;
      }
    },

    removeCart(state) {
      state.cart = [];
    },

    startNewOrder() {
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
