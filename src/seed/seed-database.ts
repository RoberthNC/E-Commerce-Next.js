import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  console.clear();
  // Delete previous registers
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  // Categories
  const { categories, products, users } = initialData;
  await prisma.user.createMany({
    data: users,
  });
  const categoriesData = categories.map((category) => ({
    name: category,
  }));
  await prisma.category.createMany({ data: categoriesData });
  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);
  // Products
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });
    // Images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));
    await prisma.productImage.createMany({ data: imagesData });
  });
  console.log("Seed executed");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
