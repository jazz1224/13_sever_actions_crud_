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
    // <div>
    //   <Link href={`/post/${post?._id}`}>
    //     <h2 className="text-center text-3xl font-bold">{post?.title}</h2>
    //     <Image
    //       className="rounded-2xl shadow-xl"
    //       src={post?.image}
    //       alt="image"
    //       height={300}
    //       width={300}
    //       priority
    //     />
    //   </Link>
    //   <div className="flex">
    //     <time suppressHydrationWarning>작성일: {createdDate}</time>
    //     <time suppressHydrationWarning>수정일: {updatedDate}</time>
    //   </div>
    //   <h3 className="text-center font-bold text-xl m-4">사진설명</h3>
    //   <p className="p-2 text-ellipsis text-xl border border-1 border-black rounded my-2">
    //     {post?.description}
    //   </p>
    //   <div className="flex gap-5">
    //     <button
    //       className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    //       onClick={() => setEditPost(post)}
    //     >
    //       Edit
    //     </button>
    //     <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
    //     onClick={()=> startTransition(()=> handleDelete(post._id))} disabled={isPending}>
    //       {isPending? '지우는 중' : '삭제'}
    //     </button>
    //   </div>
    // </div>

<div>
  <Link href={`/post/${post?._id}`}>
    <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white hover:text-sky-500">
      {post?.title}
    </h2>
    <Image
      className="rounded-3xl shadow-lg object-cover h-96 w-full md:h-72 md:w-auto"
      width={400}
      height={400}
      src={post?.image}
      alt="image"
      priority
    />
  </Link>
  <div className="flex justify-between items-center py-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-b-md">
    <time suppressHydrationWarning className="text-gray-500 dark:text-gray-300">작성일: {createdDate}</time>
    <time suppressHydrationWarning className="text-gray-500 dark:text-gray-300">수정일: {updatedDate}</time>
  </div>
  <h3 className="text-center font-bold text-xl m-4 text-gray-800 dark:text-white">사진설명</h3>
  <p className="p-2 text-ellipsis text-xl border border-gray-300 rounded my-2 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
    {post?.description}
  </p>
  <div className="flex justify-center gap-5 py-4">
    <button
      className="bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded shadow-sm"
      onClick={() => setEditPost(post)}
    >
      Edit
    </button>
    <button
      className={`bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded shadow-sm ${
        isPending ? 'cursor-not-allowed opacity-50' : ''
      }`}
      onClick={() => startTransition(() => handleDelete(post._id))}
      disabled={isPending}
    >
      {isPending ? '지우는 중' : '삭제'}
    </button>
  </div>
</div>
  );
};

export default PostCard;
