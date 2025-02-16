<template>
  <v-app class="app">
    <Header />
    <v-main
      style="
        --v-layout-left: 0px;
        --v-layout-right: 0px;
        --v-layout-top: 64px;
        --v-layout-bottom: 44px;
      "
    >
      <v-container>
        <v-tabs v-model="routeName">
          <v-tab value="Home" @click="nav('/')">Home</v-tab>
          <v-tab value="Articles" @click="nav('/articles')">Articles</v-tab>
        </v-tabs>
        <DescriptionDataContent img-path="/images/nico_pro_pp.jpg" />
        <slot />
      </v-container>
    </v-main>
    <!-- Footer -->
    <v-footer app>
      <span>&copy; 2024 My Nuxt App</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import Header from "~/components/Organisms/Header/Header.vue";
import DescriptionDataContent from "@/components/Molecules/DescriptionDataContent.vue";
import { useLanguage } from "lidin-app-kit";
function isEnglishUrl(url) {
  // Check if the URL contains '/en/' or ends with '/en' but not '/eng'
  return /\/en(\/|$)(?![a-zA-Z0-9])/.test(url);
}

const { languageRef } = useLanguage();

const route = useRoute();

const fab = ref(null);

const routeName = ref("Home");

const router = useRouter();

const routePath = computed(() => route.path);

onMounted(() => {
  console.log("DataCOmpo: ", DescriptionDataContent);
});
const nav = (path) => {
  const localePath = useLocalePath();
  router.push(localePath(path));
};
</script>

<style lang="scss" scoped></style>
