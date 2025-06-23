<template>
  <div>
    slug: {{ slug }} data: {{ data }}
    <ArticleMarkdownReadonly v-if="article" :content-md="article.contentMd" />
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from "#imports";
import { ArticleMarkdownReadonly } from "lidin-app-kit";
import { fetchArticleBySlug } from "~/api/strapi/fetchArticles";
import ArticleMardownReadonly from "~/components/Molecules/ArticleMardownReadonly/ArticleMardownReadonly.vue";

const route = useRoute();
const slug = route.params.slug;
const { t } = useI18n();

const config = useRuntimeConfig();

const articlesStore = useArticlesStore();
const articleId = route.query.id;
const article = ref(null);

article.value = articlesStore.getArticleBySlug(slug);

const articleTitle = computed(() =>
  article.value ? article.value?.contentMd.slice(0, 60) : "",
);

const { data } = await useAsyncData(`article`, () => fetchArticleBySlug(slug), {
  server: true,
  lazy: false,
  key: "articles", // Clé pour réutiliser les mêmes données pour chaque utilisateur
  cache: true, // Active le cache pour cette requête
  maxAge: 60 * 60, // Durée de vie du cache (en secondes), ici 1 heure
  staleWhileRevalidate: false, // Utilise les don
  // cache: true,
  // maxAge: 60 * 60,
  // staleWhileRevalidate: true,
  getCachedData: (key, nuxtApp) => {
    console.log(`Checking cache for key: ${key}`);
    const cache = nuxtApp.payload.data[key];
    console.log("check nuxt app payload: ", nuxtApp.payload);
    console.log("check nuxt app static: ", nuxtApp.payload);
    console.log("Cache value:", cache);
    // console.log("another cache value: ? ",
    //  nuxtApp.payload.static[key] || nuxtApp.payload.data[key]
    // )
    return (key) => nuxtApp.payload.static[key] || nuxtApp.payload.data[key];
  },
});
useSeoMeta({
  title: t("SEO.article.title", { text: articleTitle.value.slice(0, 30) }),
  description: t("SEO.article.description", {
    text: article.value.contentMd.slice(0, 200),
  }),
  ogTitle: t("SEO.article.ogTitle", { text: articleTitle.value }),
  ogDescription: t("SEO.article.ogDescription", {
    text: article.value.contentMd,
  }),
  ogUrl: `${config.public.appBaseUrl}${route.fullPath}`,
  ogImageUrl: `${config.public.appBaseUrl}/images/nico_pro_pp.jpg`,
  ogImageAlt: "",
});

definePageMeta({
  ssr: true, // Activer le SSR pour cette page
});
</script>

<style scoped lang="scss"></style>
