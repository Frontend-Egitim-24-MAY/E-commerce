// {
//     "_id": "114cbd44-1931-4e57-822b-ebc049e7d661",
//     "author": {
//         "name": "Cemre Güner",
//         "slug": "cemre-guner"
//     },
//     "categories": [
//         {
//             "slug": "kadin-giyim",
//             "title": "Kadın Giyim"
//         }
//     ],
//     "publishedAt": "2025-08-23T09:44:00.000Z",
//     "slug": "abc-uby-frontend-c-a-ue",
//     "title": "abc uby frontend ç a ü"
// }

import { PortableTextBlock } from "next-sanity";

type Author = {
  _id: string;
  name: string;
  slug: string;
};

type Category = {
  title: string;
  slug: string;
};

export type Post = {
  _id: string;
  author: Author;
  categories: Category[];
  publishedAt: Date;
  slug: string;
  title: string;
  body: PortableTextBlock;
};
