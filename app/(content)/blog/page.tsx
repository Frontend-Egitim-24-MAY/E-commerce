"use client";

import BlogCard from "@/components/blogCard";
import { Post } from "@/types/sanityTypes";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const getPosts = async () => {
    await fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json.data));
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (posts === null) {
    return <>Yükleniyor</>;
  }

  return (
    <div className="flex gap-6 grid grid-cols-4 w-full">
      {posts.map((post: Post, idx) => (
        <BlogCard post={post} key={idx} />
      ))}
    </div>
  );
}
