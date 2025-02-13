import { useTheme } from "~/myPlugins/globalConfigManager/composables/useTheme";

export default {
  install(app) {
    // init of theme
    console.log("vue globalConfigPlugin init, initTheme also.");
    const { initTheme } = useTheme();
    initTheme();
  },
};
