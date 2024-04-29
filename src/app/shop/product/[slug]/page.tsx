export const revalidate = 604800;

import { Metadata, ResolvingMetadata } from "next";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from "@/components/";
import { getProductBySlug } from "@/actions";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const product = await getProductBySlug(slug);

  return {
    title: product?.title ?? "Product not found",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Product not found",
      description: product?.description ?? "",
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ({ params: { slug } }: Props) {
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          className="block md:hidden"
          title={product.title}
          images={product.images}
        />
        {/* Desktop Slideshow */}
        <ProductSlideshow
          className="hidden md:block"
          title={product.title}
          images={product.images}
        />
      </div>
      {/* Details */}
      <div className="col-span-1 px-5">
        <StockLabel slug={slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* Sizes selector */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSize={product.sizes}
        />
        {/* Quantity selector */}
        <QuantitySelector quantity={2} />
        {/* Button */}
        <button className="btn-primary my-5">Add to cart</button>
        {/* Description */}
        <h3 className="font-bold text-sm">Description:</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
