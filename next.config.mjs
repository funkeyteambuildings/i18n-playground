/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";
import * as tsImport from "ts-import";

/** @type {import('./src/features/i18n/config.ts')} */
const { I18N_CONF } = await tsImport.load("./src/features/i18n/config.ts", {
  mode: tsImport.LoadMode.Transpile,
});

/** 
  * @typedef {import('./src/features/i18n/config.ts').I18N_CONF.Domain} Domain
  * @typedef {import('./src/features/i18n/config.ts').I18N_CONF.Locale} Locale
  *
  * @type {Array<
      import("next/dist/server/config").DomainLocale & {
        domain: Domain;
        defaultLocale: Locale;
        locales: Locale[];
      }
    >} 
  */
const I18N_DOMAINS = [
  {
    domain: "funkey.be",
    defaultLocale: "nl-BE",
    locales: ["nl-BE", 'fr-BE', /* "nl", "en" */],
    http: true,
  },
  {
    domain: "funkeyteambuildings.nl",
    defaultLocale: "nl-NL",
    locales: ["nl-NL", /* "nl", "en" */],
  },
  {
    domain: "funkey.lu",
    defaultLocale: "fr-LU",
    locales: ["fr-LU", /* "fr", "en" */],
  },
]; // prettier-ignore

/** @type {import("next").NextConfig} */
const CONFIG = {
  i18n: {
    locales: I18N_CONF.LOCALES,
    defaultLocale: I18N_CONF.DEFAULT_LOCALE,
    localeDetection: false,
    // domains: I18N_DOMAINS,
  },

};

export default CONFIG;
