import { PostProps } from "@/pages/post/[id]";
import { PostArticle } from "../lib/PostArticle/PostArticle";

export const Article = ({ post }: PostProps) => {
  return <PostArticle {...post} />;
};
