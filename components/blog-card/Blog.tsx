import Image from "next/image";
import React from "react";
import CardButton from "../button/CardButton";
import { blog } from "@/schemas";

interface blogProp {
  blog: blog;
}

const BlogCard = ({ blog }: blogProp) => {
  const defaultuserimg = "assets/user/default_profile.svg";
  const defaultcardimg = "assets/card/default-card-image.svg";
  return (
    <div className="mt-10 py-5">
      <div className="flex mb-4">
        <div className="mr-5 flex">
          <Image
            src={blog.author?.image ? blog.author.image : defaultuserimg}
            width={50}
            height={50}
            alt="profile-image"
            className="rounded-full object-fill"
          />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-[20px]">
              {blog.author?.name ? blog.author?.name : "John Doe"}
            </span>
            <span className="text-[20px] font-semibold">&#x2022;</span>
            <span className="text-[15px] text-[#9C9C9C] font-[500px]">
              {blog.createdAt}
            </span>
          </div>
          <div className="text-[15px] text-[#9C9C9C] font-[500px]">
            {blog.author?.role ? blog.author?.role : "defualt role"}
          </div>
        </div>
      </div>

      <div className="flex w-4/5 items-center justify-between">
        <div className="p-2 mr-15">
          <h2 className="font-bold text-[20px] mb-5">{blog.title}</h2>
          <p className="text-[#737373] font-normal">{blog.description}</p>
        </div>

        <div className="flex items-center w-[100%]">
          <Image
            src={defaultcardimg}
            width={0}
            height={0}
            style={{ width: "100%" }}
            alt="default image"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex gap-5">
        {blog.skills.map((skill, index) => (
          <CardButton key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
