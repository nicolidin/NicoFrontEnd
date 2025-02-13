import type { ArticleType } from "~/types/ArticleType";

export function getArticlesById(articles: Array<ArticleType>, id: string) {
  return articles.find((article) => {
    return article.documentId === id;
  });
}

export function getArticlesBySlug(articles: Array<ArticleType>, slug: string) {
  return articles.find((article) => {
    return article.slug === slug;
  });
}
