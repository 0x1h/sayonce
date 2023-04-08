import { PostProps } from "@/pages/post/[id]";
import { PostArticle } from "../lib/PostArticle/PostArticle";

export const Post = ({ post }: PostProps) => {
  return <PostArticle {...post} />;
};
