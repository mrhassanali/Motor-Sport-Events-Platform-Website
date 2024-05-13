import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TabState } from "./types";
import { RootState } from "../../store";

// Define the initial state using that type
const initialState: TabState = {
  active: {
    id: 1,
    name: "GENERAL ADMISSION",
    link: "/",
    count: 5,
    current: true,
  },
  tabs: [],
};

export const tabSlice = createSlice({
  name: "tabs",
  reducerPath: "tabs",
  initialState,
  reducers: {
    switchTab: (state, { payload }) => {
      state.active.id = payload.id;
      state.active.name = payload.name;
      state.active.link = payload.link;
      state.active.count = payload.count;
    },
    getTab: (state) => {
      return state;
    },
    setTabList: (state, { payload }) => {
      state.tabs = payload;
    },
  },
});

export const { switchTab, getTab,setTabList } = tabSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.tabs.value
// export const selectCount = (state: { tabs: TabState }) => state.tabs.value;

export default tabSlice.reducer;
