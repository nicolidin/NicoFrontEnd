<template>
  <div :class="['articlePreview', `articlePreview--${size}`, { 'articlePreview--dragging': isDragging }]">
    <div class="articlePreview__content">
      <MarkdownText :content-md="content" size="small"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import MarkdownText from "~/components/Molecules/MarkdownText/MarkdownText.vue";

const props = defineProps<{
  id: string;
  content: string;
  size: 'short' | 'tall' | 'taller' | 'tallest';
  isDragging: boolean;
}>();
</script>

<style lang="scss" scoped>
.articlePreview {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
  word-wrap: break-word;
  padding: 10px;
  transition: transform 0.3s ease;
  background-color: red;

  &--dragging {
    background: blue;
  }

  &:hover {
    transform: scale(1.05);
  }

  &__content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 12; /* Adjust for number of visible lines */
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
}
</style>
