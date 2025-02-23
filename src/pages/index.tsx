import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { commonHelpers } from "@/utils/helpers";
import { reduxWrapper, storePageContentAction } from "@/store";
import { pageContentApi } from "@/utils/apis";
import { localeConfig } from "@/utils/config";

import MainLayout from "@/layouts/MainLayout";
import RootLayout from "@/layouts/RootLayout";
import PageLazyLoading from "@/components/PageLazyLoading";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetServerSideProps } from "next";

type HomeProps = {};

const ViewHome = dynamic(() => import("@/views/Home"), {
  ssr: false,
  loading: () => <PageLazyLoading />,
});

const Home: NextPageWithLayout = () => {
  return <ViewHome />;
};

Home.getLayout = (page) => {
  return (
    <RootLayout>
      <MainLayout>{page}</MainLayout>
    </RootLayout>
  );
};

export default Home;

export const getServerSideProps = reduxWrapper.getServerSideProps(
  (store) =>
    (async (ctx) => {
      const { locale } = ctx;
      const language = localeConfig.localeToConfigMap[locale!]?.requestedValue;

      try {
        const { data: response } = await pageContentApi.fetchHomepageContent({
          params: {
            lang: language,
          },
        });

        if (!!response[0]) {
          store.dispatch(
            storePageContentAction.fetchPageContentSucceededServer(response[0])
          );
          return {
            props: {
              ...(await commonHelpers.serverSideAppSettings(ctx)),
              ...(await serverSideTranslations(locale || "")),
            },
          };
        }
      } catch (error: any) {
        store.dispatch(
          storePageContentAction.fetchPageContentSucceededServer(null)
        );
      }

      return {
        props: {
          ...(await commonHelpers.serverSideAppSettings(ctx)),
          ...(await serverSideTranslations(locale || "")),
        },
      };
    }) satisfies GetServerSideProps<HomeProps>
);
