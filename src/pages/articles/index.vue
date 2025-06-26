<template>
  <div class="articlePage">
    <h1>Mes articles</h1>
    <MozaicArticles :articles="articles.data" @clickOnArticle="openArticle" />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta, useRuntimeConfig } from "#imports";
import { useI18n } from "vue-i18n";
import { MozaicArticles } from "lidin-app-kit";
import { fetchArticles } from "~/api/strapi/fetchArticles";
import type { ArticleType } from "~/types/ArticleType";
const { t } = useI18n();
const config = useRuntimeConfig();

// Fetch articles with useAsyncData
console.log("articles pages wee will go in asyncData");
const { data: articles } = await useAsyncData("fetchArticles", fetchArticles);

const router = useRouter();
const localePath = useLocalePath();

const openArticle = (article: ArticleType) => {
  console.log("click open article iha: ", article);
  router.push(localePath(`/article/${article.slug}`));
};

// definePageMeta({middleware: 'my-route-middleware'})

useSeoMeta({
  title: t("SEO.articles.title"),
  description: t("SEO.articles.description"),
  ogTitle: t("SEO.articles.ogTitle"),
  ogDescription: t("SEO.articles.ogDescription"),
  ogUrl: `${config.public.appBaseUrl}/articles`,
  ogImageUrl: `${config.public.appBaseUrl}/images/articles_collection.jpg`,
  ogImageAlt: t("SEO.articles.ogImageAlt"),
});

</script>

<style scoped lang="scss">
@use "vuetify/lib/styles/settings/variables" as *;
.articlePage {
  height: 100%;
  width: 100%;
}

//::v-deep(.markdown p) {
//  color: var(--v-theme-kground);
//}
</style>
<style lang="scss">
.articlePage * {
  color: rgb(var(--v-theme-on-background));
}
</style>
