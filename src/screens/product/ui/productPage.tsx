"use client";

import React, { FC, useState } from "react";
import { Image } from "antd";
import GeneralInfo from "@screens/product/ui/generalInfo";
import { SBreadcrumb, SContent, SImages, SPreview, SProductPage } from "./productPage.styles";

interface ProductPageProps {
  id: number;
}

const ProductPage: FC<ProductPageProps> = ({ id }) => {
  const [visible, setVisible] = useState(false);

  return (
    <SProductPage>
      <SBreadcrumb
        items={[
          { title: "Мужское", href: "" },
          { title: "Обувь", href: "" },
          { title: `id: ${id}`, href: "" },
        ]}
      />

      <SContent>
        <SPreview
          onClick={() => setVisible(true)}
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/2/5/25-05-23-TC_192SU222055F_m1_1.jpg"
        />
        <SImages>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
            <SPreview src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/2/5/25-05-23-TC_192SU222055F_m1_1.jpg" />
            <SPreview src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/2/5/25-05-23-TC_192SU222055F_3_1.jpg" />
          </Image.PreviewGroup>
        </SImages>
        <GeneralInfo title="By parra art anger tee" color="white" price={18530} />
      </SContent>
    </SProductPage>
  );
};

export default ProductPage;
