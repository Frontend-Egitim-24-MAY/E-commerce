import { Post } from "@/types/sanityTypes";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="max-w-[400px] h-fit" as={Link} href={`/blog/${post.slug}`}>
      <CardHeader className="flex gap-3">
        {post.author.image && (
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src={post.author.image}
            width={40}
            className="object-cover"
          />
        )}
        <div className="flex flex-col">
          <p className="text-md">{post.author.name}</p>
          <p className="text-small text-default-500">
            {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{post.title}</p>
      </CardBody>
    </Card>
  );
}
