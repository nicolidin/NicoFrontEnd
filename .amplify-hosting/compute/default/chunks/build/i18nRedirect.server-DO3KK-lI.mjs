import { s as defineNuxtRouteMiddleware, t as useCookie, v as useRequestHeaders, a as navigateTo } from './server.mjs';
import 'vue';
import '../../index.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import 'vue/server-renderer';

const i18nRedirect_server = defineNuxtRouteMiddleware((to) => {
  var _a;
  console.log("middleware called !");
  const localeCookie = useCookie("i18n_redirected").value || "fr";
  ((_a = useRequestHeaders()["accept-language"]) == null ? undefined : _a.split(",")[0].slice(0, 2)) || "fr";
  const preferredLang = localeCookie;
  console.log("preferredLang: ", preferredLang);
  if (to.path === "/" && preferredLang === "en") {
    console.log("if if do we navigate?");
    return navigateTo("/en");
  }
});

export { i18nRedirect_server as default };
//# sourceMappingURL=i18nRedirect.server-DO3KK-lI.mjs.map
