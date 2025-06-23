import { useSSRContext, ref, computed, resolveComponent, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, renderSlot, defineComponent, useAttrs } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { f as useRoute$1, u as useRouter$1, g as useI18n, B as encodeParam, b as useNuxtApp, o as useLocalePath, x as useTheme, h as hasProtocol, z as withLeadingSlash, j as joinURL, A as parseURL, c as useRuntimeConfig, C as encodePath } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { C as defu } from '../../index.mjs';
import { a as useHead } from './index-DwVXQbOt.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

function useLanguage() {
  const { locale, setLocale } = useI18n();
  const languageRef = computed({
    get: () => locale.value,
    set: (value) => {
      setLocale(value);
    }
  });
  const isEnglishRef = computed({
    get: () => locale.value === "en",
    set: (value) => {
      setLocale(value ? "en" : "fr");
    }
  });
  return { languageRef, isEnglishRef };
}
const _sfc_main$4 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const { colorRef, isDarkRef } = useTheme();
    const { languageRef, isEnglishRef } = useLanguage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn_toggle = resolveComponent("v-btn-toggle");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_app_bar, mergeProps({
        app: "",
        class: "header"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn_toggle, {
              modelValue: unref(languageRef),
              "onUpdate:modelValue": ($event) => isRef(languageRef) ? languageRef.value = $event : null,
              mandatory: "",
              size: "small",
              class: "toggle langToggle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: "en",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` en `);
                      } else {
                        return [
                          createTextVNode(" en ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: "fr",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` fr `);
                      } else {
                        return [
                          createTextVNode(" fr ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      value: "en",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" en ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: "fr",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" fr ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn_toggle, {
              modelValue: unref(colorRef),
              "onUpdate:modelValue": ($event) => isRef(colorRef) ? colorRef.value = $event : null,
              mandatory: "",
              size: "small",
              class: "toggle themeToggle"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: "dark",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` dark `);
                      } else {
                        return [
                          createTextVNode(" dark ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    value: "light",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` light `);
                      } else {
                        return [
                          createTextVNode(" light ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      value: "dark",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" dark ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_btn, {
                      value: "light",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" light ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_spacer),
              createVNode(_component_v_btn_toggle, {
                modelValue: unref(languageRef),
                "onUpdate:modelValue": ($event) => isRef(languageRef) ? languageRef.value = $event : null,
                mandatory: "",
                size: "small",
                class: "toggle langToggle"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    value: "en",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" en ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    value: "fr",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" fr ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_btn_toggle, {
                modelValue: unref(colorRef),
                "onUpdate:modelValue": ($event) => isRef(colorRef) ? colorRef.value = $event : null,
                mandatory: "",
                size: "small",
                class: "toggle themeToggle"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    value: "dark",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" dark ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_btn, {
                    value: "light",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" light ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/Header/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6a39342f"]]);
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : undefined
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === undefined || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? undefined : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? undefined : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? undefined : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? undefined : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? undefined : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === undefined) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : undefined;
      if (variant === undefined) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? undefined : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? undefined : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : undefined;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? undefined : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return undefined;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return undefined;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : undefined,
      height: variant._cHeight ? variant._cHeight * density : undefined
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? undefined : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$Q3ZNzCgbQ5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [
    "localhost:3000"
  ],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$Q3ZNzCgbQ5, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || undefined,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  custom: { type: Boolean, required: false }
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: props.placeholder && !placeholderLoaded.value ? props.placeholderClass : undefined
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AvatarRound",
  __ssrInlineRender: true,
  props: {
    imgPath: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$3;
      _push(ssrRenderComponent(_component_nuxt_img, mergeProps({
        alt: "nicolas_pp",
        src: props.imgPath,
        class: "circle",
        height: "100",
        width: "100",
        sizes: "300px sm:50vw md:400px"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Atoms/AvatarRound/AvatarRound.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const AvatarRound = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9f5fc7b3"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DescriptionDataContent",
  __ssrInlineRender: true,
  props: {
    imgPath: {},
    showPicture: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { t, locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-7dd58e94>`);
      _push(ssrRenderComponent(AvatarRound, {
        style: _ctx.showPicture ? null : { display: "none" },
        "img-path": props.imgPath
      }, null, _parent));
      _push(`<h1 data-v-7dd58e94>${ssrInterpolate(unref(t)("title1"))}</h1><h2 data-v-7dd58e94>${ssrInterpolate(unref(t)("title2"))}</h2><h2 data-v-7dd58e94>${ssrInterpolate(unref(t)("title3"))}</h2></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/DescriptionDataContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const DescriptionDataContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7dd58e94"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useLanguage();
    const route = useRoute$1();
    ref(null);
    const routeName = ref("Home");
    const router = useRouter$1();
    computed(() => route.path);
    const nav = (path) => {
      const localePath = useLocalePath();
      router.push(localePath(path));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_footer = resolveComponent("v-footer");
      _push(ssrRenderComponent(_component_v_app, mergeProps({ class: "app" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Header, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, { style: { "--v-layout-left": "0px", "--v-layout-right": "0px", "--v-layout-top": "64px", "--v-layout-bottom": "44px" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_container, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1${_scopeId3}> Work In Progress </h1>`);
                        _push4(ssrRenderComponent(_component_v_tabs, {
                          modelValue: unref(routeName),
                          "onUpdate:modelValue": ($event) => isRef(routeName) ? routeName.value = $event : null
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "Home",
                                onClick: ($event) => nav("/")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Home`);
                                  } else {
                                    return [
                                      createTextVNode("Home")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_tab, {
                                value: "Articles",
                                onClick: ($event) => nav("/articles")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Articles`);
                                  } else {
                                    return [
                                      createTextVNode("Articles")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_tab, {
                                  value: "Home",
                                  onClick: ($event) => nav("/")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Home")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_tab, {
                                  value: "Articles",
                                  onClick: ($event) => nav("/articles")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Articles")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(DescriptionDataContent, { "img-path": "/images/nico_pro_pp.jpg" }, null, _parent4, _scopeId3));
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          createVNode("h1", null, " Work In Progress "),
                          createVNode(_component_v_tabs, {
                            modelValue: unref(routeName),
                            "onUpdate:modelValue": ($event) => isRef(routeName) ? routeName.value = $event : null
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_tab, {
                                value: "Home",
                                onClick: ($event) => nav("/")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Home")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_tab, {
                                value: "Articles",
                                onClick: ($event) => nav("/articles")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Articles")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(DescriptionDataContent, { "img-path": "/images/nico_pro_pp.jpg" }),
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_container, null, {
                      default: withCtx(() => [
                        createVNode("h1", null, " Work In Progress "),
                        createVNode(_component_v_tabs, {
                          modelValue: unref(routeName),
                          "onUpdate:modelValue": ($event) => isRef(routeName) ? routeName.value = $event : null
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_tab, {
                              value: "Home",
                              onClick: ($event) => nav("/")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_v_tab, {
                              value: "Articles",
                              onClick: ($event) => nav("/articles")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Articles")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(DescriptionDataContent, { "img-path": "/images/nico_pro_pp.jpg" }),
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_footer, { app: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\xA9 2024 My Nuxt App</span>`);
                } else {
                  return [
                    createVNode("span", null, "\xA9 2024 My Nuxt App")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(Header),
              createVNode(_component_v_main, { style: { "--v-layout-left": "0px", "--v-layout-right": "0px", "--v-layout-top": "64px", "--v-layout-bottom": "44px" } }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, null, {
                    default: withCtx(() => [
                      createVNode("h1", null, " Work In Progress "),
                      createVNode(_component_v_tabs, {
                        modelValue: unref(routeName),
                        "onUpdate:modelValue": ($event) => isRef(routeName) ? routeName.value = $event : null
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_tab, {
                            value: "Home",
                            onClick: ($event) => nav("/")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Home")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_tab, {
                            value: "Articles",
                            onClick: ($event) => nav("/articles")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Articles")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(DescriptionDataContent, { "img-path": "/images/nico_pro_pp.jpg" }),
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }),
              createVNode(_component_v_footer, { app: "" }, {
                default: withCtx(() => [
                  createVNode("span", null, "\xA9 2024 My Nuxt App")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=default-C1YiCX4c.mjs.map
