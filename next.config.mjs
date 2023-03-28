!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['i.kym-cdn.com', 'media2.giphy.com', 'media.tenor.com'],
  },
};
export default config;
