import axios from "axios";

import { envConfig, localeConfig } from "@/utils/config";

import type { AxiosError } from "axios";

const commonAxios = axios.create({
  baseURL: `${envConfig.API_HOST}api/v1/`,
});

commonAxios.interceptors.request.use(
  (req) => {
    const language =
      localeConfig.localeToConfigMap[
        typeof window !== "undefined" ? window.NextPublic.lang : "en"
      ]?.requestedValue;

    switch ((req.method as string).toUpperCase()) {
      case "GET": {
        req.params = req.params || {};
        if (typeof req.params["lang"] === "undefined") {
          req.params["lang"] = language;
        }
        // Object.assign(req.params, {});
        break;
      }
      case "POST": {
        if (req.data instanceof FormData) {
          if (!req.data.get("lang")) {
            req.data.append("lang", language);
          }
        } else {
          req.data = req.data || {};
          if (typeof req.data["lang"] === "undefined") {
            req.data["lang"] = language;
          }
        }
        break;
      }
      case "PUT": {
        if (req.data instanceof FormData) {
          if (!req.data.get("lang")) {
            req.data.append("lang", language);
          }
        } else {
          req.data = req.data || {};
          if (typeof req.data["lang"] === "undefined") {
            req.data["lang"] = language;
          }
        }
        break;
      }
    }

    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

commonAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default commonAxios;
