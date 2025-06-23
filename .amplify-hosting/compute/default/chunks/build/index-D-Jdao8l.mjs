import { useSSRContext, defineComponent, withAsyncContext, unref, mergeProps, ref, withCtx, createVNode, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './MarkdownText-D3AFkgww.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import draggable from 'vuedraggable';
import _ from 'lodash';
import { g as useI18n, l as useAsyncData, q as fetchArticles, u as useRouter$1, o as useLocalePath, c as useRuntimeConfig } from './server.mjs';
import { u as useSeoMeta } from './index-DwVXQbOt.mjs';
import 'markdown-it';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ArticlePreview",
  __ssrInlineRender: true,
  props: {
    id: {},
    content: {},
    size: {},
    isDragging: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["articlePreview", `articlePreview--${_ctx.size}`, { "articlePreview--dragging": _ctx.isDragging }]
      }, _attrs))} data-v-66db2a3f><div class="articlePreview__content" data-v-66db2a3f>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        "content-md": _ctx.content,
        size: "small"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/ArticlePreview/ArticlePreview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const ArticlePreview = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-66db2a3f"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MozaicLayout",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const { merge } = _;
    const props = __props;
    const normalizeItems = (items2) => {
      return items2.map((item) => merge(item, {
        size: determineSizeByText(item.contentMd)
      }));
    };
    const items = ref(normalizeItems(props.items));
    function determineSizeByText(text) {
      const length = text.length;
      if (length < 50) return "short";
      if (length < 100) return "tall";
      if (length < 150) return "taller";
      return "tallest";
    }
    const drag = ref(false);
    const draggedIndex = ref(null);
    const onChoose = (event) => {
      draggedIndex.value = event.oldIndex;
    };
    const onUnchoose = () => {
      draggedIndex.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(draggable), mergeProps({
        modelValue: items.value,
        "onUpdate:modelValue": ($event) => items.value = $event,
        tag: "div",
        class: "masonryGrid",
        "item-key": "contentMd",
        onStart: ($event) => drag.value = true,
        onEnd: ($event) => drag.value = false,
        onChoose,
        onUnchoose
      }, _attrs), {
        item: withCtx(({ element, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(["masonryGrid__item", `masonryGrid__item--${element.size}`, { "masonryGrid__item--dragging": draggedIndex.value === index }])}" data-v-9abb9a71${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {
              element,
              index,
              isDragging: draggedIndex.value === index
            }, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ["masonryGrid__item", `masonryGrid__item--${element.size}`, { "masonryGrid__item--dragging": draggedIndex.value === index }]
              }, [
                renderSlot(_ctx.$slots, "default", {
                  element,
                  index,
                  isDragging: draggedIndex.value === index
                }, undefined, true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/Mozaic/MozaicLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const MozaicLayout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9abb9a71"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MozaicArticlesPreview",
  __ssrInlineRender: true,
  props: {
    articles: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter$1();
    const localePath = useLocalePath();
    const openArticle = (article) => {
      console.log("click open article: ", article);
      router.push(localePath(`/article/${article.slug}`));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(MozaicLayout, mergeProps({
        items: props.articles
      }, _attrs), {
        default: withCtx(({ element, index, isDragging }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ArticlePreview, {
              id: element.documentId,
              content: element.contentMd,
              size: element.size,
              isDragging,
              onClick: ($event) => openArticle(element)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ArticlePreview, {
                id: element.documentId,
                content: element.contentMd,
                size: element.size,
                isDragging,
                onClick: ($event) => openArticle(element)
              }, null, 8, ["id", "content", "size", "isDragging", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/Mozaic/MozaicArticlesPreview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const config = useRuntimeConfig();
    console.log("articles pages wee will go in asyncData");
    const { data: articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("fetchArticles", fetchArticles)), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: t("SEO.articles.title"),
      description: t("SEO.articles.description"),
      ogTitle: t("SEO.articles.ogTitle"),
      ogDescription: t("SEO.articles.ogDescription"),
      ogUrl: `${config.public.appBaseUrl}/articles`,
      ogImageUrl: `${config.public.appBaseUrl}/images/articles_collection.jpg`,
      ogImageAlt: t("SEO.articles.ogImageAlt")
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Mes articles</h1>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        articles: unref(articles).data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D-Jdao8l.mjs.map
