<template>
  <div class="container">
    <p class="test">test</p>
    <AvatarRound v-show="showPicture" :img-path="props.imgPath" />
    <h1>{{ t("workInProgress") }}</h1>
    <h1>{{ t("title1") }}</h1>
    <h2>{{ t("title2") }}</h2>
    <h2>{{ t("title3") }}</h2>
  </div>
</template>

<script setup lang="ts">
import AvatarRound from "~/components/Atoms/AvatarRound/AvatarRound.vue";

type Props = {
  imgPath: string;
  showPicture: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  showPicture: true,
});

const { t, locale } = useI18n();
</script>

<style scoped lang="scss">
//@use "vuetify/lib/styles/settings/_colors.scss" as *;
//@use "lidin-app-kit/src/styles/lidin-app-kit.scss" as *;
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: $spacing-24;
}
.test {
  color: var(--v-theme-on-background);
  //color: map-get($grey, 'darken-4');     // Uses the default Vuetify blue
}
</style>
