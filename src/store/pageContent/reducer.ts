import { PageContentActionTypes } from "./types";
import { HYDRATE } from "next-redux-wrapper";

import type { PageContentState, PageContentAction } from "./types";

export const initialState: PageContentState = {
  homepageContent: null,
};

const reducer = (
  state = initialState,
  action: PageContentAction
): PageContentState => {
  switch (action.type) {
    case HYDRATE as any: {
      const { homepageContent, hydrated } = (action as any).payload
        .pageContent as PageContentState;

      const newState = {
        homepageContent,
      };

      if (typeof hydrated !== "undefined") {
        Object.entries(newState).forEach(([key, _state]) => {
          if (typeof _state === "undefined") delete (newState as any)[key];
        });
      }

      return {
        ...state,
        ...(typeof hydrated !== "undefined" ? newState : {}),
        hydrated: true,
      };
    }

    case PageContentActionTypes.FETCH_HOMEPAGE_CONTENT_SUCCEEDED_SERVER: {
      return {
        homepageContent: action.payload,
        hydrated: true,
      } as Partial<PageContentState> as PageContentState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
