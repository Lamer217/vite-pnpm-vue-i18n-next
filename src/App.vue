<template>
  <form>
    <label>{{ t("language") }}</label>
    <select v-model="locale">
      <option value="en">English</option>
      <option value="ja">Japaneese</option>
    </select>
  </form>
  <p>{{ t("hello") }}</p>
  <HelloI18n />
</template>

<script>
import { useI18n } from "vue-i18n";
import HelloI18n from "./components/HelloI18n.vue";

export default {
  name: "App",
  components: { HelloI18n },
  setup() {
    const { locale, t } = useI18n({
      inheritLocale: true,
    });

    return { locale, t };
  },
};
</script>

<!-- One can use local (in file) localisations -->
<!-- Or use separate locale files. Check src/locales/ & src/main.js -->
<i18n>
{
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "ja": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i18n>
