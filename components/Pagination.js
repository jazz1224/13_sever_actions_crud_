"use client";

import useCustomRouter from "@/hooks/useCustomRouter";
import React from "react";

const Pagination = ({ totalPage }) => {
  const newArray = [...Array(totalPage)].map((_, i) => i + 1);
  const { pushQuery, query } = useCustomRouter();
  return (
    <div className="flex gap-8  ">
      {newArray.map((page) => (
        <button
          className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
          key={page}
          onClick={()=>pushQuery({page})}
          style={{background: query.page === page ? 'orange' : ''}}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
