import { d as defineEventHandler, u as useRuntimeConfig, c as createError } from '../../../../index.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const articles_post = defineEventHandler(async (event) => {
  console.log("POSTTT");
  const config = useRuntimeConfig();
  const strapiUrl = `${config.strapiBaseUrl}/articles`;
  console.log("Proxying request to Strapi:", strapiUrl);
  try {
    const response = await fetch(strapiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.strapiBearerToken}`
      }
    });
    console.log("response post status: ", response.status);
    event.node.res.statusCode = response.status;
    for (const [key, value] of response.headers.entries()) {
      event.node.res.setHeader(key, value);
    }
    const body = await response.text();
    return body;
  } catch (error) {
    console.error("Error fetching from Strapi:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch data from Strapi"
    });
  }
});

export { articles_post as default };
//# sourceMappingURL=articles.post.mjs.map
