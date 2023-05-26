import React, { FC } from "react";
import { Image } from "antd";
import { SBreadcrumb } from "./productPage.styles";

interface ProductPageProps {
  id: number;
}

const ProductPage: FC<ProductPageProps> = ({ id }) => {
  return (
    <div>
      <SBreadcrumb
        items={[
          { title: "Мужское", href: "" },
          { title: "Обувь", href: "" },
          { title: `id: ${id}`, href: "" },
        ]}
      />
      <Image.PreviewGroup>
        <Image
          preview={{
            mask: null,
          }}
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/2/5/25-05-23-TC_192SU222055F_m1_1.jpg"
        />
        <Image
          preview={{
            mask: null,
          }}
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/2/5/25-05-23-TC_192SU222055F_3_1.jpg"
        />
      </Image.PreviewGroup>
    </div>
  );
};

export default ProductPage;
