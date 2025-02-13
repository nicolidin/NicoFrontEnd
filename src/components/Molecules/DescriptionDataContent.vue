<template>
  <div class="container">
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: $spacing-24;
}
</style>
