import { IProduct } from "@shared/model";
import { FC } from "react";
import Card from "./card";
import { SProductList } from "./productList.styles";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <SProductList>
      {products.map(values => (
        <Card key={values.productId} {...values} />
      ))}
    </SProductList>
  );
};

export default ProductList;
