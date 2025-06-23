// initAppData plugin
import { normalizeArticles } from "~/services/normalizers/normalizeStrapiArticles";
import { fetchArticles } from "~/api/strapi/fetchArticles";

// beware plugin are not called in SSG prod
export default defineNuxtPlugin(async (nuxtApp) => {
  console.log("init app dataaaa !!!");
  const articlesStore = useArticlesStore(nuxtApp.$pinia);
  if (articlesStore.articles.length === 0) {
    const { data } = await useAsyncData("fetchArticles", fetchArticles, {
      server: true,
      lazy: false,
      key: "articles", // Clé pour réutiliser les mêmes données pour chaque utilisateur
      cache: true, // Active le cache pour cette requête
      maxAge: 60 * 60, // Durée de vie du cache (en secondes), ici 1 heure
      staleWhileRevalidate: false, //vefif le comportement côté client & server
    });
    if (data.value) {
      articlesStore.setArticles(normalizeArticles(data.value));
    }
  }
});
