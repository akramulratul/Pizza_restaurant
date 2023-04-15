import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initaialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state = inititalState;
    },
  },
});
export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
