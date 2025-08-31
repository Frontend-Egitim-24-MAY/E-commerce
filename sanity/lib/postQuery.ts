import { groq } from "next-sanity";
import { client } from "./client";
import { Post } from "@/types/sanityTypes";

export const getAllPosts = async (): Promise<{
  error: string | null;
  data: Post[] | null;
}> => {
  const getAllPostQuery = groq`*[_type == "post"]{
            _id,
            title,
            body,
            publishedAt,
            "image": image.asset -> url,
            "categories":  categories[]->{
              title,
              "slug": slug.current
            },
            "slug": slug.current,
            "author": author -> {
                _id,
                name,
                "slug": slug.current,
                "image": image.asset -> url,
            },
        }`;

  try {
    const posts = await client.fetch(getAllPostQuery);

    if (!posts) {
      return { error: "Veri yok", data: null };
    }

    return { error: null, data: posts };
  } catch (error) {
    console.log(error);

    return { error: "Beklenmeyen bir hata oluştu", data: null };
  }
};

export const getSinglePost = async (
  slug: string
): Promise<{
  error: string | null;
  data: Post | null;
}> => {
  const getSinglePostQuery = groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            body,
            publishedAt,
            "image": image.asset -> url,
            "categories":  categories[]->{
              title,
              "slug": slug.current
            },
            "slug": slug.current,
            "author": author -> {
                _id,
                name,
                "slug": slug.current,
                "image": image.asset -> url,
            },
        }`;

  try {
    const post = await client.fetch(getSinglePostQuery, { slug });

    if (!post) {
      return { error: "Veri yok", data: null };
    }

    return { error: null, data: post };
  } catch (error) {
    console.log(error);

    return { error: "Beklenmeyen bir hata oluştu", data: null };
  }
};
