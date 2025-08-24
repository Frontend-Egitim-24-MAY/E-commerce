import { groq } from "next-sanity";
import { client } from "./client";
import { Post } from "@/types/sanityTypes";

export const getAllPosts = async (): Promise<{
  error: string | null;
  data: Post[] | null;
}> => {
  try {
    const posts = await client.fetch(
      groq`*[_type == "post"]{
            _id,
            title,
            body,
            publishedAt,
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
            
        }`
    );

    if (!posts) {
      return { error: "Veri yok", data: null };
    }

    return { error: null, data: posts };
  } catch (error) {
    console.log(error);

    return { error: "Beklenmeyen bir hata oluştu", data: null };
  }
};
