import { createSlice } from "@reduxjs/toolkit";
import { cardType } from "./types";

const initialState: cardType = {
  general: [],
};

export const cardSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setGeneral: (state, { payload }) => {
      state.general = payload;
    },
  },
});

export const { setGeneral } = cardSlice.actions;
export default cardSlice.reducer;
