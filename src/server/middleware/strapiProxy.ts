// server/middleware/strapiProxy.ts

import { fetchWithCache } from "../fetchWithCache";

export default defineEventHandler(async (event) => {
  // Check if the request starts with `/strapi/api`
  if (event.node.req.url?.startsWith("/strapi/api")) {
    console.log("We enter in strapi proxy :)");
    const config = useRuntimeConfig();
    // Remove the `/strapi/api` prefix and forward the remaining path to Strapi
    const strapiArticlesPath = event.node.req.url.replace(/^\/strapi\/api/, "");
    const strapiArticlesFullUrl = `${config.strapiBaseUrl}${strapiArticlesPath}`;

    console.log("Proxying request to Strapi at path:", strapiArticlesFullUrl);

    // Configurez les options pour $fetch
    const options = {
      headers: {
        Authorization: `Bearer ${config.strapiBearerToken}`,
      },
      method: event.node.req.method, // Utilise la même méthode que la requête entrante
      body:
        event.node.req.method !== "GET" && event.node.req.method !== "HEAD" // Le body n'est present que si POST, PUT, etc
          ? await readBody(event)
          : undefined,
    };

    try {
      // Faites la requête avec $fetch et retournez la réponse
      // Utiliser fetchWithCache pour mettre en cache les réponses
      const response = await fetchWithCache(strapiArticlesFullUrl, async () => {
        return await $fetch(strapiArticlesFullUrl, options);
      });

      return response;
    } catch (error) {
      console.error("Error proxying request to Strapi:", error);

      // Retourner une réponse d'erreur au lieu de throw
      event.node.res.statusCode = 500;
      return {
        error: "Failed to fetch from Strapi",
        data: [],
        meta: { pagination: { total: 0 } }
      };
    }
  }
});
