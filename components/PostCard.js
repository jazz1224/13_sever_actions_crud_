"use client";

import Image from "next/image";
import React, { useTransition } from "react";
import Link from "next/link";
import { useMyContext } from "@/context/Provider";
import { deletePost } from "@/actions/postActions";

const PostCard = ({ post, handleDelete }) => {
  const { setEditPost } = useMyContext();
  const createdDate = new Date(post?.createdAt).toLocaleString();
  const updatedDate = new Date(post?.updatedAt).toLocaleString();

  let [isPending, startTransition] = useTransition();
  // async function handleDelete(postId){
  //   if(window.confirm("진짜 지워?")){
  //     // console.log(postId)
  //     await deletePost(postId)
  //   }
  // }

  return (
    <div>
      <Link href={`/post/${post?._id}`}>
        <h2 className="text-center text-3xl font-bold">{post?.title}</h2>
        <Image
          className="rounded-2xl shadow-xl"
          src={post?.image}
          alt="image"
          height={300}
          width={300}
          priority
        />
      </Link>
      <div className="flex">
        <time suppressHydrationWarning>작성일: {createdDate}</time>
        <time suppressHydrationWarning>수정일: {updatedDate}</time>
      </div>
      <h3 className="text-center font-bold text-xl m-4">사진설명</h3>
      <p className="p-2 text-ellipsis text-xl border border-1 border-black rounded my-2">
        {post?.description}
      </p>
      <div className="flex gap-5">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => setEditPost(post)}
        >
          Edit
        </button>
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        onClick={()=> startTransition(()=> handleDelete(post._id))} disabled={isPending}>
          {isPending? '지우는 중' : '삭제'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
