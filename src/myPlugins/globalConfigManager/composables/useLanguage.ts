// composables/useLanguageToggle.ts
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { globalConfigStore } from "~/myPlugins/globalConfigManager/store/globalConfigStore";
import { useI18n } from "vue-i18n";

export function useLanguage() {
  const { locale, setLocale } = useI18n();

  const languageRef = computed({
    get: () => locale.value,
    set: (value) => {
      setLocale(value);
    },
  });
  //
  const isEnglishRef = computed({
    get: () => locale.value === "en",
    set: (value) => {
      setLocale(value ? "en" : "fr");
    },
  });

  return { languageRef, isEnglishRef };
}
