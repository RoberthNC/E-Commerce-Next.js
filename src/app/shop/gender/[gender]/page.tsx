export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";
import { Pagination } from "@/components";

interface Props {
  params: {
    gender: Gender;
  };
  searchParams: {
    page?: string;
  };
}

export default async function ({ params, searchParams }: Props) {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page, gender });
  const label: Record<string, string> = {
    men: "for men",
    women: "for women",
    kid: "for kids",
    unisex: "for all",
  };
  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }
  if (!label[gender]) {
    notFound();
  }
  return (
    <>
      <Title
        title={`Articles ${label[gender]}`}
        subtitle={`All the products for ${gender}`}
        className="mb-2"
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
