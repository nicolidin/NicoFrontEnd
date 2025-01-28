<template>
  <MozaicLayout :items="props.articles">
    <template #default="{ element, index, isDragging }">
      <ArticlePreview :id="element.documentId" :content="element.contentMd" :size="element.size" :isDragging="isDragging" @click="openArticle(element)"/>
    </template>
  </MozaicLayout>
</template>

<script setup lang="ts">
import type {ArticleType} from "~/types/ArticleType";
import ArticlePreview from "~/components/Molecules/ArticlePreview/ArticlePreview.vue";
import MozaicLayout from "~/components/Molecules/Mozaic/MozaicLayout.vue";

const props = defineProps<{
  articles: Array<ArticleType>
}>()

const router = useRouter()
const localePath = useLocalePath()


const openArticle = (article: ArticleType) => {
  console.log("click open article: ", article)
  router.push(localePath(`/article/${article.slug}`))
}
</script>

<style scoped lang="scss">

</style>
