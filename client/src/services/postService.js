import apiClient from "./apiClient";

export const likePost = async (postId, userId) => {
  return await apiClient.post(`/posts/${postId}/like?userId=${userId}`);
};

export const unlikePost = async (postId, userId) => {
  return await apiClient.post(`/posts/${postId}/unlike?userId=${userId}`);
};

export const fetchClubPosts = async ({
  clubId,
  userId,
  cursor,
  limit = 10,
}) => {
  const params = new URLSearchParams({
    userId,
    limit: limit.toString(),
  });

  if (cursor) {
    params.append("cursor", cursor.toString());
  }

  // Simulate a delay to show loading state
  if (cursor) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  const { data } = await apiClient.get(
    `/posts/club/${clubId}?${params.toString()}`
  );
  return data;
};

export const createPost = async (post, userId, clubId) => {
  try {
    console.log("Creating post:", post);
    const { data } = await apiClient.post(
      `/posts?userId=${userId}&clubId=${clubId}`,
      { title: post.title, content: post.content }
    );
    console.log("Post created successfully:", data);
    return data;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error("You must be a member of this club to create posts");
    }
    console.error(
      "Error creating post:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const deletePost = async (postId, userId) => {
  return await apiClient.delete(`/posts/${postId}?userId=${userId}`);
};

export const updatePost = async (postId, postData, userId) => {
  try {
    const { data } = await apiClient.put(
      `/posts/${postId}?userId=${userId}`,
      postData
    );
    return data;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error("You don't have permission to edit this post");
    }
    throw error;
  }
};
