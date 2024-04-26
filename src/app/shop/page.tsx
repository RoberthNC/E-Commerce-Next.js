import { initialData } from "@/seed/seed";
import { ProductGrid } from "@/components";
import { Title } from "@/components";

const products = initialData.products;

export default function () {
  return (
    <>
      <Title title="Shop" subtitle="All the products" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
