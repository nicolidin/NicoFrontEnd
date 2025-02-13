import globalConfigPlugin from "~/myPlugins/globalConfigManager/vueGlobalConfigPlugin";

// maybe put it in myPlugin ?
export default defineNuxtPlugin({
  name: "globalConfig",

  async setup(nuxtApp) {
    nuxtApp.vueApp.use(globalConfigPlugin);
  },
});
