<template>
  <div>
    <h1>Mes articles</h1>
    <MozaicArticlesPreview :articles="articles.data" />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta, useRuntimeConfig } from '#imports';
import { useI18n } from 'vue-i18n';
import MozaicArticlesPreview from "~/components/Molecules/Mozaic/MozaicArticlesPreview.vue";
import { fetchArticles } from "~/api/strapi/fetchArticles";

const { t } = useI18n();
const config = useRuntimeConfig();

// Fetch articles with useAsyncData
console.log("articles pages wee will go in asyncData")
const { data: articles } = await useAsyncData('fetchArticles', fetchArticles);

useSeoMeta({
  title: t('SEO.articles.title'),
  description: t('SEO.articles.description'),
  ogTitle: t('SEO.articles.ogTitle'),
  ogDescription: t('SEO.articles.ogDescription'),
  ogUrl: `${config.public.appBaseUrl}/articles`,
  ogImageUrl: `${config.public.appBaseUrl}/images/articles_collection.jpg`,
  ogImageAlt: t('SEO.articles.ogImageAlt')
});
</script>

<style scoped lang="scss">
</style>
