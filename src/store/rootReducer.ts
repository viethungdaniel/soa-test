import { combineReducers } from "@reduxjs/toolkit";

import common from "./common/reducer";
import pageContent from "./pageContent/reducer";

const rootReducer = combineReducers({
  common,
  pageContent,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
