import { combineReducers } from "@reduxjs/toolkit";
import { tabSlice } from "./slices/Tabs/tabSlice";
import { cardSlice } from "./slices/Card/cardSlice";

const rootReducer = combineReducers({
  [tabSlice.reducerPath]: tabSlice.reducer,
  [cardSlice.reducerPath]: cardSlice.reducer,
});

export default rootReducer;
