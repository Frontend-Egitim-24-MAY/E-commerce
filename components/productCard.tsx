import { Product } from "@/types";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="py-4">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-contain rounded-xl "
            src={product.image}
            width={270}
            height={270}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{product.category}</p>
          <small className="text-default-500">
            {product.rating.rate}-({product.rating.count})
          </small>
          <h4 className="font-bold text-large line-clamp-1">{product.title}</h4>
        </CardHeader>
      </Card>
    </Link>
  );
};
