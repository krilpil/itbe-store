interface IGetProducts {
  searchQuery?: string;
  categoryId?: number;
  gender?: number;
}

const getProducts = async (params: IGetProducts) => {
  // const products: IProduct[] = await fetch(`${process.env.BASE_URL}/api/products?${searchParams}`, {
  //   method: "GET",
  // });

  console.log(params);
};

export default getProducts;
