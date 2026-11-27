// Reusable article filtering helpers (used by ArticleLibrary).
const norm = (value) => String(value || "").toLowerCase().trim();

export const getCategorySlugs = (article) =>
  article.categorySlugs?.length ? article.categorySlugs : [article.categorySlug].filter(Boolean);

// A sub-topic matches when it is an exact tag, or the full phrase appears in title/excerpt.
export const matchesSubtopic = (article, subtopic) => {
  const topic = norm(subtopic);
  if (!topic) return true;
  if ((article.tags || []).some((tag) => norm(tag) === topic)) return true;
  return norm(`${article.title} ${article.excerpt}`).includes(topic);
};

export function filterArticles(list, { query, category, country, source, subtopic }) {
  const q = norm(query);

  return list.filter((article) => {
    if (category && !getCategorySlugs(article).includes(category)) return false;

    if (country) {
      const ok =
        country === "Global"
          ? article.country === "Global"
          : article.country === country || article.country === "Global";
      if (!ok) return false;
    }

    if (source && !(article.sourceTypes || []).includes(source)) return false;
    if (!matchesSubtopic(article, subtopic)) return false;

    if (q) {
      const text = norm(
        [article.title, article.excerpt, article.category, article.country, article.format, ...(article.tags || [])].join(" ")
      );
      if (!text.includes(q)) return false;
    }
    return true;
  });
}
