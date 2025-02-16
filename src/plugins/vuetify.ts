// plugins/vuetify.ts
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {
  dark,
  light,
} from "../../../../lidin-app-kit/src/utils/vuetifyConfig/themes";
import { createLidinAppKit, DEFAULT_VUETIFY_CONFIG } from "lidin-app-kit";

export default defineNuxtPlugin((nuxtApp) => {
  const lidinAppKit = createLidinAppKit(DEFAULT_VUETIFY_CONFIG);

  nuxtApp.vueApp.use(lidinAppKit);
  nuxtApp.provide("vuetify", lidinAppKit);
});
