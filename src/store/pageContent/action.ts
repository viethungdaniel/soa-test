import { PageContentActionTypes } from "./types";
import type {
  FetchPageContentSucceededServerAction,
  // Saga
} from "./types";

// ---- REDUCER ACTION ----

export const fetchPageContentSucceededServer = (
  payload: FetchPageContentSucceededServerAction["payload"]
): FetchPageContentSucceededServerAction => ({
  type: PageContentActionTypes.FETCH_HOMEPAGE_CONTENT_SUCCEEDED_SERVER,
  payload,
});

// ---- SAGA ACTION ----
