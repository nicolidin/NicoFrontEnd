<template>
  <v-app-bar app class="header">
    <v-spacer> </v-spacer>
    <v-btn-toggle
      v-model="languageRef"
      mandatory
      size="small"
      class="toggle langToggle"
    >
      <v-btn value="en" size="small"> en </v-btn>
      <v-btn value="fr" size="small"> fr </v-btn>
    </v-btn-toggle>

    <v-btn-toggle
      v-model="colorRef"
      mandatory
      size="small"
      class="toggle themeToggle"
    >
      <v-btn value="dark" size="small"> dark </v-btn>
      <v-btn value="light" size="small"> light </v-btn>
    </v-btn-toggle>
  </v-app-bar>
</template>

<script setup>
import { useLanguage, useTheme } from "lidin-app-kit";

const fab = ref(null);

const { colorRef, isDarkRef } = useTheme();

const { languageRef, isEnglishRef } = useLanguage();
</script>
<style lang="scss" scoped>
.header {
  .toggle {
    height: 30px;
    margin-right: 12px;
  }
}
</style>
