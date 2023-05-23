import React, { FC } from "react";
import Image from "next/image";
import { getPriceWithSpace } from "@shared/lib";
import { SCard, SPrice, SProperties } from "./card.styles";

const Cover = () => (
  <Image
    width={251}
    height={251}
    loading="lazy"
    src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1600/prodmedia/media/catalog/product/0/3/03-05-2023_27693201_m5.jpg"
    alt="Имадже"
  />
);

interface CardProps {
  title: string;
  color: string;
  price: number;
}

const Card: FC<CardProps> = ({ title, color, price }) => {
  return (
    <SCard cover={<Cover />}>
      <p>{title}</p>
      <SProperties>
        <SPrice>{color}</SPrice>
        <p>{getPriceWithSpace({ price })} &#8381;</p>
      </SProperties>
    </SCard>
  );
};

export default Card;
