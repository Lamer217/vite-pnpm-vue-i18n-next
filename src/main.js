import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

// importing the locale files
import en from "./locales/en.json";
import fr from "./locales/fr.json";

const i18n = createI18n({
  legacy: false,
  // Property to allow using locales from separate files
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  // defining locale files to be used
  messages: {
    en,
    fr,
  },
});

createApp(App).use(i18n).mount("#app");
