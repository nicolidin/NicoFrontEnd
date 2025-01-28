// composables/useThemeToggle.ts
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { globalConfigStore } from '~/myPlugins/globalConfigManager/store/globalConfigStore';

export function useTheme() {
  const generalDataManager = globalConfigStore();
  const {color, isDark} = storeToRefs(generalDataManager)

  const vuetify = useNuxtApp().vueApp.$nuxt.$vuetify

  const toogleVuetifyTheme = (newTheme: 'light' | 'dark') => {
    vuetify.theme.global.name.value = newTheme
  }

  const initTheme = () => {
    if (vuetify) {
      // If Vuetify is already available (likely on SSR hydration), apply theme immediately
      toogleVuetifyTheme(color.value);
    }
  };

  const colorRef = computed({
    get: () => color.value,
    set: (value) => {
      generalDataManager.toggleTheme()
      toogleVuetifyTheme(value)
    }
  })

  const isDarkRef = computed({
    get: () => isDark.value,
    set: (value) => {
      colorRef.value = value ? 'dark' : 'light';
    },
  });

  return { isDarkRef, colorRef, initTheme };
}
