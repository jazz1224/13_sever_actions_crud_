"use client";

import { createPost, updatePost } from "@/actions/postActions";
import React, { useRef } from "react";
import ButtonSubmit from "./ButtonSubmit";
import { useMyContext } from "@/context/Provider";

const PostForm = () => {
  const formRef = useRef();
  const { editPost, setEditPost } = useMyContext();
  async function handleAction(formData) {
    // "use server";
    const title = formData.get("title");
    const image = formData.get("image");
    const description = formData.get("description");

    if (editPost) {
      // console.log({ title, image, id: editPost._id });
      await updatePost({ title, image, description, id: editPost._id })
    } else {
      await createPost({ title, image, description });
    }
    setEditPost()
    formRef.current.reset();
  }

  return (
    <form
      action={handleAction}
      ref={formRef}
      style={{ display: "flex", gap: 20, margin: "30px 0" }}
      className=""
    >
      <input
        className="border border-1 border-blue-900"
        type="text"
        name="title"
        placeholder="제목"
        defaultValue={editPost?.title}
        required
      />
      <input
        className="border border-1 border-blue-900"
        type="text"
        name="image"
        placeholder="사진"
        defaultValue={editPost?.image}
        required
      />
      {/* <input className='border border-1 border-blue-900' type="text" name="description" placeholder="사진설명" required /> */}

      <textarea
        className="border border-1 border-blue-900"
        type="text"
        name="description"
        rows="3"
        placeholder="사진설명"
        defaultValue={editPost?.description}
        required
      />
      {editPost ? (
        <>
          <ButtonSubmit value={"업데이트!"} />
          <button type="button" onClick={() => setEditPost("")}>
            취소
          </button>
        </>
      ) : (
        <ButtonSubmit value={"업로드!"} />
      )}
    </form>
  );
};

export default PostForm;
