// server/utils/cache.ts

export async function getCachedOrFetch<T>(
  cacheKey: string, // Clé unique pour identifier le cache
  fetchFn: () => Promise<T>, // Fonction fetch pour obtenir les données
  ttl: number = 3600, // Temps de vie du cache en secondes (1 heure par défaut)
): Promise<T> {
  const storage = useStorage();

  // Vérifie si une réponse existe déjà dans le cache
  const cachedResponse = await storage.getItem<T>(cacheKey);
  if (cachedResponse) {
    console.log(`Cache hit for key: ${cacheKey}`);
    console.log("cachedResponse: ", cachedResponse);
    return cachedResponse;
  }

  console.log(`Cache miss for key: ${cacheKey}. Fetching data...`);

  const rawData = await fetchFn();
  console.log("after rawData");
  // Tenter de convertir les données brutes en JSON
  // Extraire les données sérialisables
  let serializableData;
  try {
    if (rawData?.json) {
      // Si c'est un flux JSON
      serializableData = await rawData.json();
    } else if (rawData?.text) {
      // Si c'est un flux texte, tente de convertir en JSON
      const text = await rawData.text();
      serializableData = JSON.parse(text);
    } else if (typeof rawData === "object") {
      // Si c'est déjà un objet, tenter de le transformer
      serializableData = JSON.parse(JSON.stringify(rawData));
    } else {
      throw new Error("Unsupported response format.");
    }
  } catch (error) {
    console.error("Failed to process response for cache:", error);
    throw new Error("Failed to fetch or serialize data.");
  }

  // Stocke les données sérialisées dans le cache
  try {
    await storage.setItem(cacheKey, serializableData, { ttl });
  } catch (e) {
    console.error("Cannot set item in cache:", e);
  }

  return serializableData;
}
