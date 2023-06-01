import { IProduct } from "@shared/model";
import prisma from "../../../app/api/prisma";

interface IGetProducts {
  categoryId: number;
  gender?: number;
}

const getProducts = async ({ categoryId, gender }: IGetProducts): Promise<IProduct[]> => {
  if (!categoryId) return [];

  let dynamicParams = {};

  if (gender) {
    dynamicParams = { ...dynamicParams, gender };
  }

  const products = await prisma.products.findMany({
    select: {
      productId: true,
      gender: true,
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
      ...dynamicParams,
    },
  });

  return products.map(value => ({
    productId: value.productId,
    gender: value.gender,
    price: value.price,
    color: value.color,
    title: value.title,
    images: value.images,
  }));
};

export default getProducts;
