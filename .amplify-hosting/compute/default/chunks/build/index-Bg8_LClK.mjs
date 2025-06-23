import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrInterpolate } from 'vue/server-renderer';
import { g as useI18n, k as useArticlesStore, c as useRuntimeConfig } from './server.mjs';
import { u as useSeoMeta } from './index-DwVXQbOt.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const config = useRuntimeConfig();
    useArticlesStore();
    useSeoMeta({
      title: t("SEO.home.title"),
      description: t("SEO.home.description"),
      ogTitle: t("SEO.home.ogTitle"),
      ogDescription: t("SEO.home.ogDescription"),
      ogUrl: `${config.public.appBaseUrl}/`,
      ogImageUrl: `${config.public.appBaseUrl}/images/nicolas_pp.jpg`,
      ogImageAlt: t("SEO.home.ogImageAlt")
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="header"></div><p>${ssrInterpolate(unref(t)("description1"))}</p><br><p>${ssrInterpolate(unref(t)("description2"))}</p><p>${ssrInterpolate(unref(t)("description3"))}</p><br><p>${ssrInterpolate(unref(t)("description4"))}</p><br><p>${ssrInterpolate(unref(t)("description5"))}</p><br><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bg8_LClK.mjs.map
