import { createSlice } from "@reduxjs/toolkit";

const mathExpSlice = createSlice({
  name: "mathExp",
  initialState: {
    mathExp: "",
  },
  reducers: {
    addToMathExp(state, action) {
      state.mathExp = !(state.mathExp.match(/=/g) || []).length
        ? state.mathExp + action.payload
        : state.mathExp.slice(0, state.mathExp.indexOf("=")) + action.payload;
    },
    removeFromMathExp(state) {
      state.mathExp = !(state.mathExp.match(/=/g) || []).length
        ? state.mathExp.slice(0, -1)
        : state.mathExp.slice(0, state.mathExp.indexOf("="));
    },
    removeMathExp(state) {
      state.mathExp = "";
    },
  },
});

export const { addToMathExp, removeFromMathExp, removeMathExp } =
  mathExpSlice.actions;

export default mathExpSlice.reducer;
