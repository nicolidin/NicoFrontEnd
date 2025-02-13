<template>
  <MarkdownText :content-md="props.contentMd" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import MarkdownIt from "markdown-it";
import MarkdownText from "~/components/Molecules/MarkdownText/MarkdownText.vue";

const props = defineProps<{
  contentMd: string;
}>();

// Initialize Markdown-it directly in the component
const md = new MarkdownIt();

// Define your Markdown content
const markdownContent = ref(props.contentMd);

// Convert the Markdown content to HTML
const renderedMarkdown = computed(() => md.render(markdownContent.value));
</script>
