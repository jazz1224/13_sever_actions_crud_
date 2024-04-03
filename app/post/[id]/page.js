import { getOnePost } from "@/actions/postActions";
import PostCard from "@/components/PostCard";
import React from "react";

const PostDetails = async ({ params: { id }, searchParams }) => {
  const post = await getOnePost(id);
//   console.log(post);

  return <div>
    {post && <PostCard post={post}/>}
  </div>;
};

export default PostDetails;
