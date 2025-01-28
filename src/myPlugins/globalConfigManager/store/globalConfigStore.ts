// stores/globalConfigStore.js
import { defineStore } from 'pinia';

type ColorMode = 'dark' | 'light' | 'red';
type Language = 'en' | 'fr';

// global config store, associated composables are made to manipulate it.
export const globalConfigStore = defineStore({
  id: 'globalConfig',
  state: () => {
    return {
      colorMode: 'dark' as ColorMode,
      // language: 'fr' as Language // source of truth
    };
  },
  persist: {
    enabled: true,
    persist: {
      storage: piniaPluginPersistedstate.cookies({
        sameSite: 'lax',
        maxAge: 3600 * 24 * 7, // 1 semaine
      }),
    },
    pick: ['someState'],
  },
  getters: {
    isDark() {
      return this.colorMode === 'dark';
    },
    color() {
      return this.colorMode;
    },
  },
  actions: {
    toggleTheme() {
      this.colorMode = this.colorMode === 'dark' ? 'light' : 'dark';
    },
    // for future if new theme is added
    manuallySwitchThemeColor(mode: ColorMode) {
      this.colorMode = mode;
    },

    // switchLanguage(lang: Language) {
    //   this.language = lang
    // }
  },
});
