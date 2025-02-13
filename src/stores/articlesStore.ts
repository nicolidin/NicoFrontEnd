// stores/useArticlesStore.ts
import { defineStore } from "pinia";
import type { ArticleType } from "~/types/ArticleType";
import {
  getArticlesById,
  getArticlesBySlug,
} from "~/services/articles/articles";

export type State = {
  articles: Array<ArticleType>;
};

export const useArticlesStore = defineStore<State>("articlesStore", {
  state: () => ({ _articles: [] }),

  getters: {
    articles(state) {
      return state._articles;
    },
    getArticleById: (state) => (id: string) => {
      return getArticlesById(state._articles, id);
    },
    getArticleBySlug: (state) => (slug: string) => {
      return getArticlesBySlug(state._articles, slug);
    },
  },
  actions: {
    setArticles(newArticles: Array<ArticleType>) {
      this._articles = newArticles;
    },
  },
});
