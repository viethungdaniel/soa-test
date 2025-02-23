// import { CommonActionTypes } from "./types";

import type { CommonState, CommonAction } from "./types";

export const initialState: CommonState = {};

const reducer = (state = initialState, action: CommonAction): CommonState => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;
