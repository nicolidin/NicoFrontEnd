<template>
  <nuxt-img alt="nicolas_pp" :src="props.imgPath"
            class="circle" height="100" width="100"
            sizes="300px sm:50vw md:400px"
  ></nuxt-img>
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
