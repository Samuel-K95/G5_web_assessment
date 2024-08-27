import Blog from "@/components/blog/Blog";
import React from "react";
const page = () => {
  return (
    <div className="w-full">
      <div className="mt-10 ml-20">
        <div className="flex justify-between w-3/5">
          <div>
            <p className="font-bold text-lg">Blogs</p>
          </div>
          <div className="flex">
            <input
              className="border-[2px] p-2 rounded-3xl px-10 mr-5"
              type="text"
              placeholder=" Search"
            />
            <button className="bg-[#264FAD] rounded-3xl text-white font-semibold py-1 px-5">
              + New Blog
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-3/5 py-5">
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default page;
