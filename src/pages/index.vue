<template>
  <div class="header"></div>
  <p>{{ t("description1") }}</p>
  <br />
  <p>{{ t("description2") }}</p>
  <p>{{ t("description3") }}</p>
  <br />
  <p>{{ t("description4") }}</p>
  <br />
  <p>{{ t("description5") }}</p>

  <br />
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

import { ref } from "vue";
const val = ref(null);

import { ArticlePreview } from "lidin-app-kit";
const config = useRuntimeConfig();

const articleRef = ref(null);
const articlesStore = useArticlesStore();

onMounted(() => {
  console.log("article scopeId: ", ArticlePreview.__scopeId);

  console.log("ArticlePreview compiled in Nuxt?", import.meta.hot);

  console.log("ArticlePreview instance:", articleRef.value);
});
useSeoMeta({
  title: t("SEO.home.title"),
  description: t("SEO.home.description"),
  ogTitle: t("SEO.home.ogTitle"),
  ogDescription: t("SEO.home.ogDescription"),
  ogUrl: `${config.public.appBaseUrl}/`,
  ogImageUrl: `${config.public.appBaseUrl}/images/nicolas_pp.jpg`,
  ogImageAlt: t("SEO.home.ogImageAlt"),
});

onMounted(() => {
  console.log("index mounted:");
  console.log("ArticlePreview: ", ArticlePreview);
});
</script>

<style scoped lang="scss"></style>
