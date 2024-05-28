import { createSlice } from "@reduxjs/toolkit";

// function initialState() {
//   () =>
//     localStorage.getItem("texts")
//       ? JSON.parse(localStorage.getItem("texts"))
//       : [];
// }

const initialState = localStorage.getItem("texts")
  ? JSON.parse(localStorage.getItem("texts"))
  : [];

const textsSlice = createSlice({
  name: "texts",
  initialState: initialState,
  reducers: {
    onAddText: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { onAddText } = textsSlice.actions;
export default textsSlice.reducer;
