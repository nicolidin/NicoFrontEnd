export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const strapiUrl = `${config.strapiBaseUrl}/articles`;

  console.log("Proxying request to Strapi:", strapiUrl);

  try {
    // Perform the manual fetch to Strapi
    const response = await fetch(strapiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.strapiBearerToken}`,
      },
    });

    console.log("response.status: ", response.status);
    // Set Strapi's status code and headers on the current response
    event.node.res.statusCode = response.status;

    // Relay headers from Strapi
    for (const [key, value] of response.headers.entries()) {
      event.node.res.setHeader(key, value);
    }

    // Stream the response body directly
    const body = await response.text(); // Get the body as text
    return body; // This will be sent to the client
  } catch (error) {
    console.error("Error fetching from Strapi:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch data from Strapi",
    });
  }
});
