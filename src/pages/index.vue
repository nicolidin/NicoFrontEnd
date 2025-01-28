<template>
  <div class="header">
  </div>
  <p>test</p>
  <p>{{t('description1')}}</p>
  <br/>
  <p>{{t('description2')}}</p>
  <p>{{t('description3')}}</p>
  <br/>
  <p>{{t('description4')}}</p>
  <br/>
  <p>{{t('description5')}}</p>
  <br/>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
import AvatarRound from "~/components/Atoms/AvatarRound/AvatarRound.vue";
import {fetchArticles} from "~/api/strapi/fetchArticles";
import {normalizeArticles} from "~/services/normalizers/normalizeStrapiArticles";
import {useLanguage} from "~/myPlugins/globalConfigManager/composables/useLanguage";


const config = useRuntimeConfig();

const articlesStore = useArticlesStore();

useSeoMeta({
  title: t('SEO.home.title'),
  description: t('SEO.home.description'),
  ogTitle: t('SEO.home.ogTitle'),
  ogDescription: t('SEO.home.ogDescription'),
  ogUrl: `${config.public.appBaseUrl}/`,
  ogImageUrl: `${config.public.appBaseUrl}/images/nicolas_pp.jpg`,
  ogImageAlt: t('SEO.home.ogImageAlt')
});

onMounted(() => {
  console.log("index mounted:")
})

</script>

<style scoped lang="scss">

</style>
