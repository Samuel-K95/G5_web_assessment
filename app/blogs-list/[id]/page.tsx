"use client";

import JobDescription from "@/components/job-description/JobDescription";
import { usePathname } from "next/navigation";
import React from "react";

const BlogDescriptionPage = () => {
  const url = usePathname();
  const parts = url.split("/");
  const id = parts[parts.length - 1];
  return (
    <div className="w-[90%]">
      <JobDescription id={id} />
    </div>
  );
};

export default BlogDescriptionPage;
