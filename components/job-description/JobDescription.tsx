"use client";
import { blog } from "@/schemas";
import Image from "next/image";
import { useGetSingleBlogQuery } from "@/store/service/blog-service";
import React from "react";

interface descriptionProp {
  id: string;
}
const JobDescription = ({ id }: descriptionProp) => {
  const { data, isError, isLoading, isSuccess } = useGetSingleBlogQuery(id);
  let blogData: blog = {
    _id: "",
    image: "",
    title: "",
    description: "",
    author: {
      _id: "",
      name: "",
      email: "",
      image: "",
      role: "",
    },
    isPending: false,
    tags: [],
    likes: 0,
    relatedBlogs: [],
    skills: [],
    createdAt: "",
    updatedAt: "",
    __v: 0,
  };

  if (isLoading) {
    return <div className="w-full max-h-min">Loading</div>;
  }

  if (isSuccess) {
    console.log(data);
    blogData = data;
  }
  const defaultuserimg = "/assets/user/default_profile.svg";

  return (
    <div className="">
      <div className="flex items-center flex-col justify-center">
        <div className="w-[4/5] flex justify-center items-center flex-col mb-12">
          <p className="font-normal text-[32px]">{blogData?.title}</p>
          <div className="flex gap-1 text-[16px]">
            {blogData.tags.map((tag) => (
              <span>{tag.toUpperCase()}</span>
            ))}
            <span>|</span>
            <span>6 MIN READ</span>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <Image
            src={"/assets/card/bigger.svg"}
            width={0}
            height={0}
            style={{ width: "80%" }}
            alt="programming"
            className="flex"
          />
        </div>
      </div>

      <div className="w-[4/5] flex justify-center items-center flex-col mt-10 gap-3 font-normal">
        <Image
          src={blogData.author?.image ? blogData.author?.image : defaultuserimg}
          width={50}
          height={50}
          alt="programming"
          className="rounded-full object-fill"
        />

        <div className="flex gap-5">
          <span>
            {blogData.author?.name ? blogData.author?.name : "John Doe"}
          </span>
          <span>|</span>
          <span>
            {blogData.author?.role ? blogData.author?.role : "Developer"}
          </span>
        </div>

        <Image
          src={"/assets/card/chalut.svg"}
          width={100}
          height={100}
          alt="usrname"
        />

        <div className="w-[70%] mt-10 flex flex-col">
          <div>{blogData.description}</div>
          <div className="mt-5 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      <div className="p-10">
        <h2 className="font-semibold text-[18px]">Related Blogs</h2>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default JobDescription;
