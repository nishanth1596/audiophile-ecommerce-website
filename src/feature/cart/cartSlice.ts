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
  //   cart: [],
  cart: [
    {
      id: 1,
      unitPrice: 2999,
      totalPrice: 2999,
      image: {
        desktop:
          "./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        mobile:
          "./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
        tablet:
          "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
      },
      title: "XX99 MK II",
      quantity: 1,
    },
    {
      id: 2,
      unitPrice: 899,
      totalPrice: 1798,
      image: {
        desktop:
          "./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        mobile:
          "./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
        tablet:
          "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
      },
      title: "XX59",
      quantity: 2,
    },
    {
      id: 3,
      unitPrice: 599,
      totalPrice: 599,
      image: {
        desktop:
          "./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        mobile:
          "./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
        tablet:
          "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
      },
      title: "YXI",
      quantity: 1,
    },
  ],
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
  },
});

export default cartSlice.reducer;
export const { addToCart, increaseCart, decreaseCart } = cartSlice.actions;

export const getCart = (store: RootState) => store.cart.cart;
