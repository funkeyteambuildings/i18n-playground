export var I18N_CONF;
(function (I18N_CONF) {
    I18N_CONF.COUNTRIES = ["BE", "NL", "LU"];
    I18N_CONF.LANGUAGES = ["nl", "fr", "en"];
    I18N_CONF.LOCALES = [
        "nl",
        "nl-BE",
        "nl-NL",
        "fr",
        "fr-BE",
        "fr-LU",
        "en",
    ];
    I18N_CONF.DEFAULT_LOCALE = "nl-BE";
    I18N_CONF.COUNTRY_DOMAINS = {
        BE: "funkey.be",
        NL: "funkeyteambuildings.nl",
        LU: "funkey.lu",
    };
})(I18N_CONF || (I18N_CONF = {}));
