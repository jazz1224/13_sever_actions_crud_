"use server";

import connectDB from "@/database/mongodb";
import Post from "@/models/postModel";
import { revalidatePath } from "next/cache";

export async function createPost(data) {
  try {
    connectDB();

    const newPost = new Post(data);

    await newPost.save();

    revalidatePath("/");

    return { ...newPost._doc, _id: newPost._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to creare post");
  }
}
export async function getAllPost(searchParams) {
  const search = searchParams.search || "";
  const sort = searchParams.sort || "createdAt";

  const limit = searchParams.limit * 1 || 3;
  const page = searchParams.page * 1 || 1;
  const skip = searchParams.skip * 1 || limit * (page - 1);

  try {
    connectDB();

    const posts = await Post.find({ title: { $regex: search } })
      .sort(sort)
      .limit(limit)
      .skip(skip);

    const count = await Post.find({ title: { $regex: search } }).count();

    const totalPage = Math.ceil(count/limit)

    const newData = posts.map((post) => ({
      ...post._doc,
      _id: post._doc._id.toString(),
    }));

    return { posts: newData, count, totalPage };
  } catch (error) {
    throw new Error(error.message || "Failed to creare post");
  }
}

export async function updatePost({ title, image, description, id }) {
  try {
    connectDB();

    const post = await Post.findByIdAndUpdate(
      id,
      { title, image, description },
      { new: true }
    );

    revalidatePath("/");

    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to update posts");
  }
}

export async function deletePost({ postId }) {
  try {
    connectDB();
    // const post = await Post.findByIdAndDelete(postId, { new: true });
    await Post.findByIdAndDelete(postId, { new: true });

    revalidatePath("/");

    return { msg: "Deleted" };
  } catch (error) {
    return { errMsg: error.message };
  }
}

export async function getOnePost(postId) {
  try {
    connectDB();

    const post = await Post.findById(postId);
    // console.log(post);

    return { ...post._doc, _id: post._doc._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to creare post");
  }
}
