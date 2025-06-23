import { d as defineEventHandler, u as useRuntimeConfig, c as createError } from '../../../../index.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const articles_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const strapiUrl = `/articles`;
  try {
    const data = await $fetch(strapiUrl, {
      baseURL: config.strapiBaseUrl,
      headers: {
        Authorization: `Bearer ${config.strapiBearerToken}`
      }
    });
    return data;
  } catch (error) {
    console.error("Error fetching from Strapi:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch data from Strapi"
    });
  }
});

export { articles_get as default };
//# sourceMappingURL=articles.get.mjs.map
