import type { ArticleType } from "~/types/ArticleType";

type StrapiArticleType = {
  id: number;
  documentId: string;
  contentMd: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type StrapiResponseType = {
  data: StrapiArticleType[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export function normalizeArticles(
  strapiData: StrapiResponseType,
): ArticleType[] {
  return strapiData.data.map((article) => ({
    documentId: article.id,
    documentId: article.documentId,
    contentMd: article.contentMd,
    slug: article.slug,
    timestamps: {
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      publishedAt: article.publishedAt,
    },
  }));
}

// Example usage:
const exampleStrapiData: StrapiResponseType = {
  data: [
    {
      id: 2,
      documentId: "s73eis2bkeq8nnxulqbfbsso",
      contentMd: "# Vuejs vs React who win ?\n\n## Vuejs\n\n## React",
      createdAt: "2024-10-30T13:35:49.513Z",
      updatedAt: "2024-10-30T13:35:49.513Z",
      publishedAt: "2024-10-30T13:35:49.527Z",
    },
    // additional items...
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 11,
    },
  },
};

// const normalizedArticles = normalizeArticles(exampleStrapiData);
// console.log(normalizedArticles);
