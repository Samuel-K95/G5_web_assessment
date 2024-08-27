"use client";
import BlogCard from "@/components/blog-card/Blog";
import { blog } from "@/schemas";
import { useGetAllBlogsQuery } from "@/store/service/blog-service";
import Link from "next/link";
import React, { useEffect } from "react";
const page = () => {
  const { data, isLoading, isError, isSuccess } =
    useGetAllBlogsQuery(undefined);
  let recievedData: blog[] = [];
  let processdata: blog[] = [];

  if (isLoading) {
    console.log("loading");
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Ooops! There was an error!</div>;
  }
  if (isSuccess) {
    recievedData = data;
    processdata = recievedData.slice(0, 5);
    console.log(processdata);
  }

  return (
    <div className="w-full">
      <div className="ml-20">
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

      <div className="flex justify-center items-center p-5 mt-5">
        <div className="w-[70%] py-5">
          <div className="">
            {processdata.map((currBlog) => (
              <div key={currBlog._id}>
                <div className="bg-[#D7D7D7] w-[90%] h-[0.5px]"></div>
                <Link href={`/blogs-list/${currBlog._id}`}>
                  <BlogCard key={currBlog._id} blog={currBlog} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
