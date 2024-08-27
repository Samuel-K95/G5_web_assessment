import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="flex">
        <div className="mr-5">
          <Image
            src={"assets/user/default_profile.svg"}
            width={70}
            height={70}
            alt="profile-image"
          />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-[20px]">Yididiya Kebede</span>
            <span className="text-[20px] font-semibold">&#x2022;</span>
            <span className="text-[15px] text-[#9C9C9C] font-[500px]">
              Apr 16, 2022
            </span>
          </div>
          <div className="text-[15px] text-[#9C9C9C] font-[500px]">
            SOFTWARE ENGINEER
          </div>
        </div>
      </div>
      <div className="flex">
        <div>Content</div>
        <div>Image</div>
      </div>
      <div>bottom</div>
    </div>
  );
};

export default Blog;
