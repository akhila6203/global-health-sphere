import axiosApi from "./axios";

// Read every published page returned by the existing public /api/posts endpoint.
export const getPublicPosts = async () => {
  const pageSize = 250;
  const firstResponse = await axiosApi.get("/posts", {
    params: { limit: pageSize, page: 1, sort: "newest" },
  });
  const firstData = firstResponse.data || {};
  const firstPosts = Array.isArray(firstData.posts) ? firstData.posts : [];
  const total = Number(firstData.total || firstPosts.length);
  const pageCount = Math.ceil(total / pageSize);

  if (pageCount <= 1) return firstPosts;

  const remaining = await Promise.all(
    Array.from({ length: pageCount - 1 }, (_, index) =>
      axiosApi.get("/posts", {
        params: { limit: pageSize, page: index + 2, sort: "newest" },
      })
    )
  );

  return [
    ...firstPosts,
    ...remaining.flatMap((response) =>
      Array.isArray(response.data?.posts) ? response.data.posts : []
    ),
  ];
};

export const getCategories = async () => {
  const { data } = await axiosApi.get("/categories");
  return Array.isArray(data?.categories) ? data.categories : [];
};

export const getCategoryTree = async () => {
  const { data } = await axiosApi.get("/article-categories/tree");
  return Array.isArray(data?.tree) ? data.tree : [];
};
