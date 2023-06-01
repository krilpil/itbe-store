import { IProduct } from "@shared/model";
import prisma from "../../../app/api/prisma";

interface IGetProducts {
  searchQuery?: string;
  categoryId?: number;
  gender?: number;
}

const getProducts = async ({
  categoryId,
  gender,
  searchQuery,
}: IGetProducts): Promise<IProduct[]> => {
  if (!categoryId && !searchQuery) return [];

  let dynamicParams = {};

  if (categoryId) {
    dynamicParams = { ...dynamicParams, categoryId };
  }

  if (gender) {
    dynamicParams = { ...dynamicParams, gender };
  }

  if (searchQuery) {
    dynamicParams = {
      ...dynamicParams,
      title: {
        search: searchQuery.toLowerCase(),
      },
    };
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
    where: { ...dynamicParams },
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
