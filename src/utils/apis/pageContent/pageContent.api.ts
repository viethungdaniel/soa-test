import { commonAxios } from "@/libs";

import type {
  FetchHomepageContentPayload,
  FetchHomepageContentResponseData,
} from "./pageContent.api.types";
// import type { AxiosResponseData } from "@/libs/axios";

const pageContentApi = {
  fetchHomepageContent: (payload: FetchHomepageContentPayload) => {
    return commonAxios.get<FetchHomepageContentResponseData>("pages", {
      params: payload.params,
      cancelToken: payload?.cancelToken,
    });
  },
};

export default pageContentApi;
