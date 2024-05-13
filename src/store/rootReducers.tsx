import { combineSlices } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { quotesApiSlice } from "./slices/user/userSlice";
import { tabSlice } from "./slices/Tabs/tabSlice";
import { cardSlice } from "./slices/Card/cardSlice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(tabSlice, quotesApiSlice, cardSlice);

export default rootReducer;
