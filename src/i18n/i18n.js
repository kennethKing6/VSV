import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { FooterFr } from "./footer";
import { formFr } from "./form";
import { headerFr, headerEn } from "./header";
import { navigationFr } from "./navigation";
import { presentationFr } from "./presentation";

const translations = {
    en: {
        ...headerEn,
    },
    fr: {
        ...headerFr,
        ...navigationFr,
        ...presentationFr,
        ...FooterFr,
        ...formFr


    }
}


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: translations.en
            },
            fr: {
                translation: translations.fr
            },
        },
        lng: "fr", // if you're using a language detector, do not define the lng option
        fallbackLng: "fr",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

class App18n {
    constructor() { }

    translate(key = "") {
        let translated = i18n.t(key)


        if (!translated) {
            const keyIndex = Object.values(translations.fr).findIndex((value, index) => value === translated)

            const foundKey = Object.keys(keyIndex)

            translated = i18n.t(foundKey)
        }

        return translated
    }

    getKeys() {
        return translations.fr
    }
}

export const APP18n = new App18n()