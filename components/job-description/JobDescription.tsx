"use client";
import { useGetSingleBlogQuery } from "@/store/service/blog-service";
import React from "react";

interface descriptionProp {
  id: string;
}
const JobDescription = ({ id }: descriptionProp) => {
  const { data, isError, isLoading } = useGetSingleBlogQuery(id);

  return <div>id</div>;
};

export default JobDescription;
