import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  const filterProductsByCategory = initialData.products.filter(
    (product) => product.gender === id
  );
  // if (id === "kids") {
  //   notFound();
  // }
  return (
    <>
      <Title
        title={`Category: ${id}s`}
        subtitle={`All the products for ${id}s category`}
        className="mb-2"
      />
      <ProductGrid products={filterProductsByCategory} />
    </>
  );
}
