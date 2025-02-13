export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const strapiUrl = `/articles`;

  try {
    const data = await $fetch(strapiUrl, {
      baseURL: config.strapiBaseUrl,
      headers: {
        Authorization: `Bearer ${config.strapiBearerToken}`,
      },
    });

    // not mandatory
    // event.node.res.statusCode = 200;
    return data; // $fetch parse automatiquement en JSON si la réponse est JSON
  } catch (error) {
    console.error("Error fetching from Strapi:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch data from Strapi",
    });
  }
});
