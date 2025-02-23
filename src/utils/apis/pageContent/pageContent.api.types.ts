import type { CancelToken, RawAxiosRequestHeaders } from "axios";

type Payload = {
  cancelToken?: CancelToken;
  headers?: RawAxiosRequestHeaders;
};

export type FetchHomepageContentPayload = {
  params?: {
    lang?: string;
  };
} & Payload;
export type FetchHomepageContentResponseData = {
  id: string;
  language: string;
  head_menu: string[];
  banner_title: string[];
  banner_menu: string[];

  bloc_1: {
    title: string;
    subtitle: string;
    cases: Array<{
      category: string;
      tagline: string;
      description: string;
      cta: string;
    }>;
  };

  bloc_2: {
    title: string;
    cases: string[];
  };

  bloc_2_2: {
    title: string;
    btn_1: [string, string];
    btn_2: [string, string];
    btn_3: string;
    btn_4: [string, string, string];
    btn_5: string;
    btn_6: string;
  };

  bloc_3: {
    title: string;
    more_info: string;
    cases: Array<{
      category: string;
      tagline: string;
      description: string;
    }>;
  };

  carte_point: Array<{
    name: string;
    website: string;
    address: string;
    phone?: string | string[];
    free_call?: string;
    fax?: string;
    email?: string;
    activities: string[];
    marker_information: string[];
    coordinates?: {
      latitude: string;
      longitude: string;
    };
  }>;

  bloc_4: {
    title: string;
    subtitle: string;
    text_title: string;
    text: string;
    pictos: Array<{
      title: string;
      description: string;
    }>;
  };

  bloc_5: {
    title: string;
    text: string;
    reviews: Array<{
      author: string;
      review: string;
      date: string;
    }>;
    footer: string;
  };

  bloc_6: {
    title: string;
    subtitle: string;
    text: string;
    button: string;
  };

  footer: {
    address: {
      name: string;
      phone: string;
      location: string;
    };
    links: Array<{
      name: string;
      url: string;
    }>;
  };
}[];
