// plugins/vuetify.ts
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {dark, light} from "~/utils/themes";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'light',
     themes: {
        light,
        dark,
      },
    },
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
  nuxtApp.provide('vuetify', vuetify);
});
