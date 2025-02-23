import type { FetchHomepageContentResponseData } from "@/utils/apis/pageContent";

export enum PageContentActionTypes {
  FETCH_HOMEPAGE_CONTENT_SUCCEEDED_SERVER = "@@pageContent/FETCH_HOMEPAGE_CONTENT_SUCCEEDED_SERVER",
}

// State

export interface PageContentState {
  hydrated?: boolean;

  homepageContent: FetchHomepageContentResponseData[0] | null;
}

// ---- Reducer Action ----

export type FetchPageContentSucceededServerAction = {
  type: PageContentActionTypes.FETCH_HOMEPAGE_CONTENT_SUCCEEDED_SERVER;
  payload: FetchHomepageContentResponseData[0] | null;
};

// ---- Saga Action ----

export type PageContentAction = FetchPageContentSucceededServerAction;
