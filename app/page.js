import connectDB from "@/database/mongodb";
import React from "react";
import PostForm from '@/components/PostForm.js'
import { getAllPost } from "@/actions/postActions";
import PostList from "@/components/PostList";
import Feature from "@/components/Feature";
import Pagination from "@/components/Pagination";

const Home = async ({params, searchParams}) => {

  const {posts, totalPage} = await getAllPost(searchParams)



  
  return (
    <div>
      <h1 className="text-4xl">SERVER ACTIONS</h1>
      <PostForm />
      <Feature/>
      {posts && <PostList posts={posts}/>}
      {totalPage && <Pagination totalPage={totalPage}/>}
    </div>
  );
};

export default Home;
