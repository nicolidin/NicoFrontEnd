// api/strapi/articlesService.ts
import { useRuntimeConfig } from "#app";
import mockData from "@/mock/articles.json";

export const fetchArticles = async () => {
  const config = useRuntimeConfig();
  if (config.public.isStrapiMock) {
    console.log("Mock: Returning all articles from JSON file.");
    console.log("JSON.stringify : ", JSON.stringify(mockData));
    return mockData;
  }

  console.log("fetchArticles function is called!");
  const url = `/strapi/api/articles`;
  console.log("URL to call:", url);
  try {
    const data = await $fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error: any) {
    console.error("Fetch error:", error);
    throw new Error(error.message || "Failed to fetch articles");
  }
};

export const fetchArticleById = async (id: string | number) => {
  const config = useRuntimeConfig();
  if (config.public.isStrapiMock) {
    console.log(`Mock: Returning article with ID ${id} from JSON file.`);
    const article = mockData.data.find((item) => item.id === id);
    if (!article) throw new Error("Article not found");
    return article;
  }

  const url = `/strapi/api/articles/${id}`;
  console.log("URL to call:", url);

  try {
    return await $fetch(url);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch article");
  }
};

export const fetchArticleBySlug = async (slug: string) => {
  const config = useRuntimeConfig();
  if (config.public.isStrapiMock) {
    console.log(`Mock: Returning article with slug ${slug} from JSON file.`);
    const article = mockData.data.find((item) => item.slug === slug);
    if (!article) throw new Error("Article not found");
    return article;
  }

  console.log("in fetch article by slug");
  const url = `/strapi/api/articles?filters[slug][$eq]=${slug}`;

  console.log("URL to call:", url);

  try {
    return await $fetch(url);
  } catch (error: any) {
    console.error("Fetch error:", error);
    throw new Error(error.message || "Failed to fetch article by slug");
  }
};
