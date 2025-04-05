import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type CartItemProps = {
  id: number;
  unitPrice: number;
  totalPrice: number;
  image: string;
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
      image: "./assets/cart/image-xx99-mark-two-headphones.jpg",
      title: "XX99 MK II",
      quantity: 1,
    },
    {
      id: 2,
      unitPrice: 899,
      totalPrice: 1798,
      image: "./assets/cart/image-xx59-headphones.jpg",
      title: "XX59",
      quantity: 2,
    },
    {
      id: 3,
      unitPrice: 599,
      totalPrice: 599,
      image: "./assets/cart/image-yx1-earphones.jpg",
      title: "YXI",
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add() {
      console.log(1);
    },
  },
});

export default cartSlice.reducer;
export const { add } = cartSlice.actions;

export const getCart = (store: RootState) => store.cart.cart;
