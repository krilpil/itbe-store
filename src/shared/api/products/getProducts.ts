import { IProduct } from "@shared/model";
import prisma from "../../../app/api/prisma";

interface IGetProducts {
  categoryId: number;
}

const getProducts = async ({ categoryId }: IGetProducts): Promise<IProduct[]> => {
  if (!categoryId) return [];

  const products = await prisma.products.findMany({
    select: {
      productId: true,
      categoryName: true,
      title: true,
      color: true,
      images: true,
      price: true,
    },
    where: {
      categoryName: {
        categoryId: +categoryId,
      },
    },
  });

  return products.map(value => ({
    productId: value.productId,
    price: value.price,
    color: value.color,
    title: value.title,
    images: value.images,
  }));
};

export default getProducts;
