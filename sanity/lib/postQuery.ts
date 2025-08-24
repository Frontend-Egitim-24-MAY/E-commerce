import { client } from "./client";

export const getAllPosts = async () => {
  try {
    const posts = await client.fetch(
      `*[_type == "post"]{
            _id,
            title,
            "slug": slug.current,
            "author": author -> {
                name,
                "slug": slug.current
            },
            
        }`
    );

    if (!posts) {
      return { error: "Veri çekilemedi", data: null };
    }

    return { error: null, data: posts };
  } catch (error) {
    console.log(error);
  }
};
