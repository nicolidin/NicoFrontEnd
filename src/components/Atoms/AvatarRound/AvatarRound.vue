<template>
  <nuxt-img alt="nicolas_pp" :src="props.imgPath"
            class="circle" height="100" width="100"
            sizes="(max-width: 500px) 100px, (min-width: 501px) 100px"
            :modifiers="{ width: 100, height: 100, fit: 'cover' }"></nuxt-img>
</template>

<script setup lang="ts">

const props = defineProps<{
  imgPath: string
}>()

</script>

<style scoped lang="scss">
.circle {
  --circle-size: 100px;
  width: var(--circle-size);
  height: var(--circle-size);
  border-radius: 50%;
}
</style>
