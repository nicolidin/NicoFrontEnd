<template>
  <div v-html="renderedMarkdown" :class="[ 'markdown', `markdown--${size}`]"></div>
</template>

<script setup lang="ts">
import { ref, computed, withDefaults } from 'vue';
import MarkdownIt from 'markdown-it';

// Define the props type
type Props = {
  contentMd: string;
  size?: 'medium' | 'small'; // Make `size` optional here
};

// Use `defineProps` with `withDefaults`
const props = withDefaults(defineProps<Props>(), {
  size: 'medium', // Default value for `size`
});
// Initialize Markdown-it directly in the component
const md = new MarkdownIt();

// Define your Markdown content
const markdownContent = ref(props.contentMd);

// Convert the Markdown content to HTML
const renderedMarkdown = computed(() => md.render(markdownContent.value));
</script>

<style lang="scss" >

.markdown {
  --base-heading-size: 0.95rem; /* Set base size here */
  --base-text-size: 0.83rem; /* Set base size here */

  &--small {
    h1 {
      font-size: calc(var(--base-heading-size) * 1); /* h1 at base size */
    }

    h2, h3, h4, h5, h6 {
      font-size: calc(var(--base-heading-size) * 0.83); /* h2 a bit smaller */
    }

    p, li, span, a, blockquote, td, th {
      font-size: var(--base-text-size);
    }
  }
}
</style>

