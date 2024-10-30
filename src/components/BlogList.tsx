import React from "react";
import BlogListItem from "./shared/content-types/Blogs/BlogListItem";
import { useLoaderData } from "react-router-dom";

const BlogList: React.FC = () => {
  const blogs = useLoaderData();

  return (
    <div className="container mx-auto max-w-5xl bg-white px-16 py-10">
      <h1 className="pb-8">Blog Posts</h1>
      <ul>
        {(blogs as unknown as any[]).length > 0
          ? (blogs as unknown as any[]).map((blog: any) => (
              <BlogListItem post={blog} key={blog.identifier} />
            ))
          : "No Blogs Found"}
      </ul>
    </div>
  );
};

export default BlogList;
