export namespace I18N_CONF {
  export const COUNTRIES = ["BE", "NL", "LU"] as const;
  export type Country = (typeof COUNTRIES)[number];

  export const LANGUAGES = ["nl", "fr", "en"] as const;
  export type Language = (typeof LANGUAGES)[number];

  export const LOCALES = [
    "nl",
    "nl-BE",
    "nl-NL",

    "fr",
    "fr-BE",
    "fr-LU",

    "en",
  ] as const satisfies Array<Language | `${Language}-${Country}`>;
  export type Locale = (typeof LOCALES)[number];

  export const DEFAULT_LOCALE = "nl-BE" satisfies Locale;

  export const COUNTRY_DOMAINS = {
    BE: "funkey.be",
    NL: "funkeyteambuildings.nl",
    LU: "funkey.lu",
  } as const satisfies Record<Country, string>;
  export type Domain = (typeof COUNTRY_DOMAINS)[Country];
}
