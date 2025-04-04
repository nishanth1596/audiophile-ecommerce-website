import { createSlice } from "@reduxjs/toolkit";

type CartItemProps = {
  id: number;
  price: number;
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
      price: 2999,
      image: "../../assets/cart/image-xx99-mark-two-headphones.jpg",
      title: "XX99 MK II",
      quantity: 1,
    },
    {
      id: 2,
      price: 899,
      image: "../../assets/cart/image-xx59-headphones.jpg",
      title: "XX99 MK II",
      quantity: 2,
    },
    {
      id: 1,
      price: 599,
      image: "../../assets/cart/image-yx1-earphones.jpg",
      title: "XX99 MK II",
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
