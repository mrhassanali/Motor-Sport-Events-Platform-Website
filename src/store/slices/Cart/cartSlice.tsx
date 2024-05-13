import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Define the initial state using that type
const initialState = {
  general: [],
  camping: [],
  hospitality: [],
  parking: [],
};

export const cartSlice = createSlice({
  name: "tabs",
  reducerPath: "tabs",
  initialState,
  reducers: {
    addGeneral: (state, { payload }) => {
      state.general = payload;
    },
    removeGeneral: (state, { payload }) => {
      delete state.general[payload];
    },
    setCamping: (state, { payload }) => {
      state.camping = payload;
    },
    setHospitality: (state, { payload }) => {
      state.hospitality = payload;
    },
    setParking: (state, { payload }) => {
      state.parking = payload;
    },
  },
});

export const { addGeneral, removeGeneral } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.tabs.value
// export const selectCount = (state: { tabs: TabState }) => state.tabs.value;

export default cartSlice.reducer;
