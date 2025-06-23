import { useSSRContext, defineComponent, ref, computed, withAsyncContext, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import MarkdownIt from 'markdown-it';
import { _ as _sfc_main$2 } from './MarkdownText-D3AFkgww.mjs';
import { f as useRoute$1, g as useI18n, k as useArticlesStore, l as useAsyncData, m as fetchArticleBySlug, c as useRuntimeConfig } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArticleMardownReadonly",
  __ssrInlineRender: true,
  props: {
    contentMd: {}
  },
  setup(__props) {
    const props = __props;
    const md = new MarkdownIt();
    const markdownContent = ref(props.contentMd);
    computed(() => md.render(markdownContent.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        "content-md": props.contentMd
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/ArticleMardownReadonly/ArticleMardownReadonly.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    const slug = route.params.slug;
    const { t } = useI18n();
    const config = useRuntimeConfig();
    const articlesStore = useArticlesStore();
    route.query.id;
    const article = ref(null);
    article.value = articlesStore.getArticleBySlug(slug);
    const articleTitle = computed(() => {
      var _a;
      return article.value ? (_a = article.value) == null ? undefined : _a.contentMd.slice(0, 60) : "";
    });
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`article`, () => fetchArticleBySlug(slug), {
      server: true,
      lazy: false,
      key: "articles",
      // Clé pour réutiliser les mêmes données pour chaque utilisateur
      cache: true,
      // Active le cache pour cette requête
      maxAge: 60 * 60,
      // Durée de vie du cache (en secondes), ici 1 heure
      staleWhileRevalidate: true,
      // Utilise les don
      // cache: true,
      // maxAge: 60 * 60,
      // staleWhileRevalidate: true,
      getCachedData: (key, nuxtApp) => {
        console.log(`Checking cache for key: ${key}`);
        const cache = nuxtApp.payload.data[key];
        console.log("check nuxt app payload: ", nuxtApp.payload);
        console.log("check nuxt app static: ", nuxtApp.payload);
        console.log("Cache value:", cache);
        return (key2) => nuxtApp.payload.static[key2] || nuxtApp.payload.data[key2];
      }
    })), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: t("SEO.article.title", { text: articleTitle.value.slice(0, 30) }),
      description: t("SEO.article.description", { text: article.value.contentMd.slice(0, 200) }),
      ogTitle: t("SEO.article.ogTitle", { text: articleTitle.value }),
      ogDescription: t("SEO.article.ogDescription", { text: article.value.contentMd }),
      ogUrl: `${config.public.appBaseUrl}${route.fullPath}`,
      ogImageUrl: `${config.public.appBaseUrl}/images/nico_pro_pp.jpg`,
      ogImageAlt: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}> slug: ${ssrInterpolate(unref(slug))} data: ${ssrInterpolate(unref(data))} `);
      if (unref(article)) {
        _push(ssrRenderComponent(_sfc_main$1, {
          "content-md": unref(article).contentMd
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/article/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CvfQ6zYm.mjs.map
