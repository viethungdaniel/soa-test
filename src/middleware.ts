import { NextRequest, NextResponse } from "next/server";
import { envConfig } from "./utils/config";
import { storageKeyConstants } from "./utils/constants";

const PUBLIC_FILE = /\.(.*)$/;

export const middleware = async (req: NextRequest) => {
  const isProd = process.env.NODE_ENV === "production";

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const contentSecurityPolicyHeaderValue = [
    `frame-ancestors 'none';`,
    `default-src 'self' ${envConfig.API_DOMAIN};`,
    `style-src 'self' ${isProd ? `'nonce-${nonce}'` : `'unsafe-inline'`};`,
    `script-src 'self' www.gstatic.com ${
      isProd
        ? `'nonce-${nonce}' 'strict-dynamic' https: http:`
        : `'unsafe-inline' 'unsafe-eval' `
    };`,
    `font-src 'self' data:;`,
    `img-src 'self' * blob: data:;`,
    `worker-src 'self' blob:;`,
    `connect-src 'self'  ${envConfig.API_DOMAIN};`,
    `object-src 'none';`,
    `base-uri 'self';`,
    `form-action 'self';`,
    `frame-src 'self' *;`,
    `upgrade-insecure-requests;`,
  ].join(" ");

  const response = NextResponse.next();
  response.headers.set("x-nonce", nonce);
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return response;
  }

  if (req.nextUrl.locale === envConfig.DEFAULT_LOCALE) {
    const locale =
      req.cookies.get(storageKeyConstants.APP_LOCALE)?.value ||
      envConfig.DEFAULT_LOCALE;
    if (locale === req.nextUrl.locale) return response;
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }

  return response;
};
