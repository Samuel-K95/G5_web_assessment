import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: "api/blogs",
        method: "GET",
      }),
    }),

    getSingleBlog: builder.query({
      query: (id: string) => ({
        url: `api/${id}`,
      }),
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetSingleBlogQuery } = blogApi;
