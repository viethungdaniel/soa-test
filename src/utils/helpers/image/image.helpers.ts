import { envConfig } from "@/utils/config";
import { commonHelpers } from "..";

import type { ImageLoader } from "next/image";

export const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${envConfig.BASE_DOMAIN}${src}?w=${width}&q=${quality || 75}`;
};

export const imagePathLoader = (pathname?: string) => {
  if (!pathname) return "";
  return "";
  // return `${envConfig.CDN_HOST}${pathname ?? ""}`;
};

export const appImageLoader = (payload: {
  src?: string;
  width?: SafeNumber;
  quality?: number;
}) => {
  const { src, width = 1200 } = payload || {};

  if (!src) return src!;

  return `/api/common/app-image?pathname=${src ?? ""}&media_query=${
    parseInt(`${width}`) > 600 ? "desktop" : "mobile"
  }`;
};

export const optimizedImageLoader = (payload: {
  src?: string;
  width?: SafeNumber;
  quality?: number;
}) => {
  const { src, width = 1200, quality = 80 } = payload || {};

  return `/_next/image?url=${src ?? ""}&w=${width}&q=${quality}`;
};

// export const generateEncodedShimmerSvg = ({
//   width,
//   height,
// }: {
//   width: SafeNumber;
//   height: SafeNumber;
// }) =>
//   `data:image/svg+xml;base64,${commonHelpers.encodeBase64(
//     `<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <defs>
//     <linearGradient id="g-clXSsN">
//       <stop stop-color="#F5F5F5" offset="20%" />
//       <stop stop-color="#EAE9E9" offset="50%" />
//       <stop stop-color="#F5F5F5" offset="70%" />
//     </linearGradient>
//   </defs>
//   <rect width="${width}" height="${height}" fill="#F5F5F5" />
//   <rect id="r-clXSsN" width="${width}" height="${height}" fill="url(#g-clXSsN)" />
//   <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="4s" repeatCount="indefinite"  />
// </svg>`
//   )}`;

export const generateEncodedShimmerSvg = () =>
  `data:image/svg+xml;base64,${commonHelpers.encodeBase64(
    `<svg viewBox="0 0 24 24" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g-clXSsN">
      <stop stop-color="#F5F5F5" offset="20%" />
      <stop stop-color="#EAE9E9" offset="50%" />
      <stop stop-color="#F5F5F5" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="24" height="24" fill="#F5F5F5" />
  <rect width="24" height="24" id="r-clXSsN" fill="url(#g-clXSsN)" />
  <animate xlink:href="#r-clXSsN" attributeName="x" from="-24" to="24" dur="2s" repeatCount="indefinite"  />
</svg>`
  )}`;

export const generateEncodedCustomReversedLogoSvg = (payload?: {
  bgFill?: string;
  arrow1Fill?: string;
  arrow2Fill?: string;
}) => {
  const { bgFill, arrow1Fill, arrow2Fill } = payload || {};

  return `data:image/svg+xml;base64,${commonHelpers.encodeBase64(
    `<svg viewBox="0 0 83 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect width="83" height="100" fill="${bgFill ?? "none"}"/>
      <path d="M24.7201 15.0795C26.7287 15.5996 28.7374 16.109 30.746 16.6291C22.3076 17.8391 14.1455 19.8876 6.34475 23.7828C14.3793 22.5198 22.2651 21.9891 30.1402 23.6448C30.1402 23.7191 30.1509 23.7828 30.1509 23.8571C29.2369 23.9739 28.3229 24.08 27.4089 24.2074C20.2139 25.2157 13.2315 26.9139 6.95053 30.7879C4.49553 32.3057 2.29559 34.1207 0.616408 36.5194C0.425109 36.7953 0.255065 37.0819 0.127533 37.4215C0.308204 37.2942 0.488875 37.1774 0.669547 37.0501C2.48689 35.8082 4.54867 35.1184 6.65296 34.5452C9.47993 33.7704 12.36 33.2397 15.272 32.9319C18.014 32.6453 20.7559 32.4224 23.4979 32.1889C24.3162 32.1146 25.1346 32.0934 25.9529 32.0404C25.9635 32.0934 25.9635 32.1465 25.9742 32.1996C24.9114 32.4649 23.8486 32.7303 22.7858 33.0062C17.5889 34.3966 12.5832 36.2328 8.03456 39.1728C5.367 40.8923 2.97576 42.9301 1.22219 45.6154C0.818335 46.2204 0.499503 46.889 0.180671 47.5471C2.89074 44.8406 6.38726 43.7155 9.90504 42.7497C13.0083 41.89 16.186 41.3274 19.3425 40.6269C19.4062 40.6163 19.4806 40.6269 19.7144 40.6269C19.4275 40.8286 19.2787 40.9559 19.1086 41.0515C15.1658 43.2379 11.4142 45.6897 8.00268 48.6509C5.18633 51.1027 2.6463 53.7986 0.860846 57.1207C0.552642 57.6939 0.308204 58.2989 0 58.9675C0.159416 58.9463 0.23381 58.9463 0.276321 58.9145C4.95252 55.8365 9.94755 53.321 14.9426 50.8162C21.6274 47.4622 28.3548 44.225 35.3266 41.4972C37.8241 40.5208 40.3641 39.6504 43.0104 39.1516C44.7533 38.8226 46.4963 38.5891 48.2499 39.0879C49.5783 39.4594 49.6421 39.5868 49.0788 40.8286C47.9948 43.2379 46.9001 45.6578 45.8161 48.0672C45.6354 48.4705 45.4654 48.8844 45.3698 49.309C44.9765 51.0178 45.8799 51.92 47.5697 51.4211C48.8663 51.039 50.131 50.5084 51.385 49.9989C60.121 46.4963 68.8464 42.9726 77.5824 39.47C79.6335 38.6527 80.9089 37.1774 81.3446 35.0228C81.5465 34.0251 81.4934 33.0274 81.1533 32.051C77.6568 22.0846 74.1709 12.1183 70.6637 2.16252C70.4831 1.64245 70.1961 1.12237 69.8667 0.676591C69.2502 -0.161898 68.3469 -0.236194 67.6561 0.538613C67.1991 1.05869 66.8271 1.6849 66.5296 2.31112C65.3392 4.86904 64.1808 7.4482 63.033 10.0273C62.8524 10.4519 62.6717 10.5262 62.2466 10.3776C59.664 9.51788 57.0177 8.89167 54.297 8.70062C52.3734 8.57326 50.4392 8.41405 48.5262 8.54142C46.5707 8.66878 44.6152 9.07211 42.6809 9.44359C37.3564 10.4731 32.1489 11.9378 27.0901 13.9014C26.3036 14.2092 25.5278 14.5382 24.7413 14.8566C24.7307 14.9309 24.7307 15.0052 24.7201 15.0795Z" fill="${
        arrow1Fill ?? "#ED0F77"
      }"/>
      <path d="M38.4107 89.7001C40.7456 89.4244 43.0167 89.2228 45.2561 88.8622C51.072 87.9395 56.6756 86.3062 61.9821 83.7184C66.5775 81.4805 70.7378 78.6382 74.2719 74.9261C78.273 70.7262 81.0642 65.8687 82.1892 60.1309C83.3566 54.1173 82.4758 48.4008 79.5254 43.013C79.4723 42.9281 79.4086 42.8433 79.3662 42.7796C78.3155 44.0099 77.3179 45.272 76.2353 46.4493C72.4465 50.6068 67.9572 53.831 62.9161 56.3128C58.3737 58.5506 53.5979 60.0566 48.631 61.0006C45.4365 61.6051 42.2101 61.9339 38.9732 62.1354C38.8564 62.146 38.7291 62.1354 38.5168 62.1354C38.5168 61.7536 38.5168 61.3824 38.5168 61.0218C38.5381 58.7733 38.5699 56.5355 38.5911 54.287C38.5911 53.937 38.5487 53.5764 38.4532 53.237C38.1029 51.9537 36.9992 51.4234 35.5452 51.9431C34.7492 52.2295 33.9745 52.6643 33.274 53.1522C24.2212 59.4733 15.1683 65.805 6.11542 72.1367C5.06474 72.8792 4.18386 73.7488 3.92915 75.064C3.63199 76.5488 4.14141 77.8215 5.28761 78.7442C6.69914 79.879 8.20618 80.9078 9.68138 81.9578C17.6305 87.6107 25.5796 93.2743 33.55 98.906C34.1655 99.3409 34.8978 99.7015 35.6301 99.8924C37.2963 100.327 38.3895 99.4151 38.4001 97.6863C38.4107 95.2152 38.4107 92.7334 38.4107 90.2622C38.4107 90.0713 38.4107 89.8804 38.4107 89.7001Z" fill="${
        arrow2Fill ?? "#383838"
      }"/>
    </g>
  </svg>
`
  )}`;
};

export const generateEncodedErrorImageSvg = () =>
  `data:image/svg+xml;base64,${commonHelpers.encodeBase64(
    `<svg viewBox="0 0 155 155" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
    <path d="M109.816 115.915C113.17 115.915 115.914 118.659 115.914 122.013V134.208C115.914 137.561 113.17 140.305 109.816 140.305C106.463 140.305 103.719 137.561 103.719 134.208V122.013C103.719 118.659 106.463 115.915 109.816 115.915Z" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M93.0479 115.915V140.305" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M91.831 131.16H80.8555V115.916" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M138.781 115.915V140.305" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M137.564 131.16H126.588V115.916" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M67.1348 152.5H152.5V103.719H67.1348V152.5Z" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M65.9647 136.549C30.3751 134.632 2.5 105.215 2.5 69.5733C2.5 32.5301 32.5296 2.50037 69.5726 2.50037C106.616 2.50037 136.645 32.5301 136.645 69.5733C136.645 81.19 133.628 92.6074 127.89 102.708" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M57.7855 38.3899C89.8148 9.55979 122.13 -4.7356 133.005 6.13998C138.635 11.7692 137.672 23.5509 130.321 39.006M39.0063 130.321C23.5507 137.673 11.7684 138.636 6.13951 133.007C-4.73601 122.131 9.55961 89.815 38.3902 57.7852" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M100.548 70.2354C107.264 70.2354 112.743 64.757 112.743 58.0403C112.743 51.3232 107.264 45.8449 100.548 45.8449C93.8309 45.8449 88.3525 51.3232 88.3525 58.0403C88.3525 64.757 93.8309 70.2354 100.548 70.2354Z" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M47.1967 96.6978C51.361 96.6978 54.7576 93.3014 54.7576 89.1368C54.7576 84.9725 51.361 81.5759 47.1967 81.5759C43.0321 81.5759 39.6357 84.9725 39.6357 89.1368C39.6357 93.3014 43.0321 96.6978 47.1967 96.6978Z" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="22.926" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M47.8369 47.835H47.8391" stroke="currentColor" stroke-width="4.5302" stroke-miterlimit="2.613" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </svg>    
    `
  )}`;
