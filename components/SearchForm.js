"use client";

import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import useCustomRouter from "@/hooks/useCustomRouter";

const SearchForm = () => {
  const { pushQuery, query } = useCustomRouter();

  async function handleSearch(formData) {
    const search = formData.get("search");

    pushQuery({search})
  }

  return (
    <form
      className="border border-1 border-gray-400 rounded-md"
      action={handleSearch}
    >
      <input type="search" name="search" placeholder="찾아보기" defaultValue={query.search || ''} />
      <ButtonSubmit value={"찾아!"} />
    </form>
  );
};

export default SearchForm;
