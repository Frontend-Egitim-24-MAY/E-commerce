"use client";

import { MyPortableText } from "@/components/portableText";
import { getSinglePost } from "@/sanity/lib/postQuery";
import { Post } from "@/types/sanityTypes";
import { Divider } from "@heroui/divider";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SingleBlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const getSinglePostData = async () => getSinglePost(slug);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    getSinglePostData().then((res) => setPost(res.data));
  }, []);

  if (post === null) {
    return <div>Yükleniyor</div>;
  }

  return (
    <div className="flex flex-col w-full mx-auto">
      <h1 className="text-6xl font-bold pr-24 text-left pb-12">{post.title}</h1>
      <Divider />
      <MyPortableText value={post.body} />
    </div>
  );
}
