<template>
  <draggable
      v-model="items"
      tag="div"
      class="masonryGrid"
      item-key="contentMd"
      @start="drag = true"
      @end="drag = false"
      @choose="onChoose"
      @unchoose="onUnchoose"
  >
    <template #item="{ element, index }">
      <div :class="['masonryGrid__item', `masonryGrid__item--${element.size}`, { 'masonryGrid__item--dragging': draggedIndex === index }]">
        <slot :element="element" :index="index" :isDragging="draggedIndex === index" />
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import draggable from 'vuedraggable';

import _ from 'lodash';
const { merge } = _;
const props = defineProps<{
  items: Array<{contentMd: string, id: string}>
}>()

const normalizeItems = (items: Array<{contentMd}>) => {
  return items.map(item => (merge(item, {
    size: determineSizeByText(item.contentMd),
  })))
}

const items = ref(normalizeItems(props.items));

// Pure function to determine size based on text length
function determineSizeByText(text: string): string {
  const length = text.length;

  if (length < 50) return 'short';
  if (length < 100) return 'tall';
  if (length < 150) return 'taller';
  return 'tallest';
}

// State for tracking if an item is being dragged
const drag = ref(false);
const draggedIndex = ref<number | null>(null); // Index of the currently dragged item

// Event handlers for tracking the dragged item
const onChoose = (event: any) => {
  draggedIndex.value = event.oldIndex;
};

const onUnchoose = () => {
  draggedIndex.value = null;
};
</script>

<style lang="scss" scoped>
.masonryGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 50px;
  gap: 10px;
  padding: 10px;

  &__item {
    &--short {
      grid-row: span 2;
    }

    &--tall {
      grid-row: span 3;
    }

    &--taller {
      grid-row: span 4;
    }

    &--tallest {
      grid-row: span 5;
    }

    &--dragging {
      background: blue;
    }

    &:hover {
      transform: scale(1.05);
    }

  }
}
</style>
