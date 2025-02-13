import { getQuery, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const userId = event.context.params?.id; // Récupère l'ID de l'utilisateur depuis l'URL dynamique

  if (!userId) {
    throw createError({
      statusCode: 400,
      statusMessage: "User ID is required",
    });
  }

  if (event.req.method === "GET") {
    // Exemple : Récupérer des paramètres de requête
    const query = getQuery(event);
    return {
      message: `Fetching user ${userId}`,
      query,
    };
  }

  if (event.req.method === "POST") {
    // Exemple : Lire le corps d'une requête POST
    const body = await readBody(event);
    return {
      message: `Updating user ${userId}`,
      data: body,
    };
  }

  throw createError({
    statusCode: 405,
    statusMessage: "Method Not Allowed",
  });
});
