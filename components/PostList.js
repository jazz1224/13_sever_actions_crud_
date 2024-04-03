"use client";

import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { deletePost } from "@/actions/postActions";
const PostList = ({ posts }) => {
  async function handleDelete(postId) {
    if (window.confirm("진짜 지워?")) {
      console.log({postId})
      await deletePost({postId});
    }
  }

  return (
    <div className="flex gap-9">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PostList;
