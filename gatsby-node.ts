// imports
import createPosts, { CreatePostsProps } from "./src/gatsby/create-posts";

/**
 * Create Posts
 */
export const createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePostsProps) => {
  // create posts
  const postActivity = reporter.activityTimer(`Create post`);
  postActivity.start();
  await createPosts({ actions, graphql, reporter });
  postActivity.end();
};
