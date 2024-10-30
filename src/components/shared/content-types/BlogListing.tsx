import BlogListItem from "./Blogs/BlogListItem";
import { DotCMSContentlet } from "types";

export default function BlogListing({ posts }: { posts: DotCMSContentlet[] }) {
  return (
    <div className="mb-10 flex flex-col gap-8">
      {posts?.length > 0
        ? posts.map((blog: any) => (
            <BlogListItem key={blog.identifier} post={blog} />
          ))
        : "No Blogs Found"}
    </div>
  );
}
