import { createSlice } from "@reduxjs/toolkit";
import { shift } from "../helpers/shift";

const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [
      { id: "4", mathexp: "" },
      { id: "3", mathexp: "" },
      { id: "2", mathexp: "" },
      { id: "1", mathexp: "" },
    ],
  },
  reducers: {
    addToHistory(state, action) {
      state.history = shift(state.history, action.payload);
    },
    removeFromHistory(state, action) {
      state.history = state.history.filter((el) => el.id !== action.payload);
    },
    removeHistory(state) {
      state.history = [
        { id: "4", mathexp: "" },
        { id: "3", mathexp: "" },
        { id: "2", mathexp: "" },
        { id: "1", mathexp: "" },
      ];
    },
  },
});

export const { addToHistory, removeHistory } = historySlice.actions;

export default historySlice.reducer;
