import React, { FC } from "react";
import Image from "next/image";
import { getPriceWithSpace } from "@shared/lib";
import { usePathname, useRouter } from "next/navigation";
import { IProduct } from "@shared/model";
import { SCard, SPrice, SProperties, STitle } from "./card.styles";

interface CoverProps {
  image: string;
}
const Cover: FC<CoverProps> = ({ image }) => (
  <Image width={251} height={251} priority src={image} alt="Имадже" />
);

type CardProps = Pick<IProduct, "productId" | "title" | "color" | "price" | "images">;

const Card: FC<CardProps> = ({ productId, title, color, price, images }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handlerClickCard = () => {
    router.push(`${pathname}/${productId}`);
  };

  return (
    <SCard onClick={handlerClickCard} cover={<Cover image={images[0]} />}>
      <STitle>{title}</STitle>
      <SProperties>
        <SPrice>{color}</SPrice>
        <p>{getPriceWithSpace({ price })} &#8381;</p>
      </SProperties>
    </SCard>
  );
};

export default Card;
