import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { cardType } from "./types";

// Define the initial state using that type
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

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.tabs.value
// export const selectCount = (state: { tabs: TabState }) => state.tabs.value;

export default cardSlice.reducer;
