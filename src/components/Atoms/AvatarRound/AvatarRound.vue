<template>
  <nuxt-img alt="nicolas_pp" :src="props.imgPath"
            class="circle" height="100" width="100"
            sizes="100px"></nuxt-img>
   <nuxt-img alt="nicolas_pp" :src="props.imgPath"
            class="circle" height="100" width="100"
            sizes="300px sm:50vw md:400px"
  ></nuxt-img>
    <!-- 1️⃣ Taille Fixe 100px -->
  <nuxt-img alt="100px_fixed" :src="props.imgPath"
            class="circle" width="100" height="100"
            sizes="100px"></nuxt-img>

  <!-- 2️⃣ Taille Fixe 300px -->
  <nuxt-img alt="300px_fixed" :src="props.imgPath"
            class="circle" width="300" height="300"
            sizes="300px"></nuxt-img>

  <!-- 3️⃣ Adaptatif avec Breakpoints (avec ratio carré) -->
  <nuxt-img alt="breakpoints_square" :src="props.imgPath"
            class="circle" width="100" height="100"
            sizes="(max-width: 500px) 100px, (min-width: 501px) 100px"></nuxt-img>

  <!-- 4️⃣ Variations responsive avec largeur identique pour éviter `w ≠ h` -->
  <nuxt-img alt="responsive_equal_wh" :src="props.imgPath"
            class="circle" width="100" height="100"
            sizes="300px sm:300px md:300px"></nuxt-img>

  <!-- 5️⃣ Adaptatif viewport avec taille identique forcée -->
  <nuxt-img alt="vw_based_square" :src="props.imgPath"
            class="circle" width="10vw" height="10vw"
            sizes="(max-width: 600px) 100px, (min-width: 601px) 200px"></nuxt-img>

  <!-- 6️⃣ Mode Full Viewport 50vw mais carré -->
  <nuxt-img alt="full_viewport_square" :src="props.imgPath"
            class="circle" width="50vw" height="50vw"
            sizes="(max-width: 800px) 100px, 50vw"></nuxt-img>

  <!-- 7️⃣ Taille dynamique basée sur ratio exact -->
  <nuxt-img alt="ratio_enforced" :src="props.imgPath"
            class="circle" width="200" height="200"
            sizes="200px"></nuxt-img>

  <!-- 8️⃣ Taille flexible en viewport en restant carré -->
  <nuxt-img alt="adaptive_square" :src="props.imgPath"
            class="circle" width="20vw" height="20vw"
            sizes="(max-width: 400px) 50px, 20vw"></nuxt-img>

  <!-- 9️⃣ Test sans `sizes` mais avec `modifiers` -->
  <nuxt-img alt="no_sizes_modifiers" :src="props.imgPath"
            class="circle" width="100" height="100"
            sizes="false"
            :modifiers="{ width: 100, height: 100, fit: 'cover' }"></nuxt-img>

  <!-- 🔟 Mode forcé avec viewport 100px -->
  <nuxt-img alt="fixed_viewport_100" :src="props.imgPath"
            class="circle" width="100" height="100"
            sizes="(max-width: 1000px) 100px, 100px"></nuxt-img>
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
