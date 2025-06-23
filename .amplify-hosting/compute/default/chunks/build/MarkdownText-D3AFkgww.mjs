import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import MarkdownIt from 'markdown-it';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MarkdownText",
  __ssrInlineRender: true,
  props: {
    contentMd: {},
    size: { default: "medium" }
  },
  setup(__props) {
    const props = __props;
    const md = new MarkdownIt();
    const markdownContent = ref(props.contentMd);
    const renderedMarkdown = computed(() => md.render(markdownContent.value));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["markdown", `markdown--${_ctx.size}`]
      }, _attrs))}>${(_a = renderedMarkdown.value) != null ? _a : ""}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/MarkdownText/MarkdownText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=MarkdownText-D3AFkgww.mjs.map
