import { IProduct } from "@shared/model";

interface IGetProducts {
  searchQuery: string | null;
  categoryId: string | null;
  gender: string | null;
}

const getProducts = async ({
  searchQuery,
  categoryId,
  gender,
}: IGetProducts): Promise<IProduct[]> => {
  const searchParams = new URLSearchParams("");

  if (searchQuery) await searchParams.append("searchQuery", searchQuery);
  if (categoryId) await searchParams.append("categoryId", categoryId);
  if (gender) await searchParams.append("gender", gender);

  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?${searchParams.toString()}`, {
    method: "GET",
  }).then(products => {
    return products.json();
  });
};

export default getProducts;
