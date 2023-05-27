import React, { FC } from "react";
import Image from "next/image";
import { getPriceWithSpace } from "@shared/lib";
import { usePathname, useRouter } from "next/navigation";
import { SCard, SPrice, SProperties } from "./card.styles";

const Cover = () => (
  <Image
    width={251}
    height={251}
    priority
    src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1600/prodmedia/media/catalog/product/0/3/03-05-2023_27693201_m5.jpg"
    alt="Имадже"
  />
);
interface CardProps {
  id: string;
  title: string;
  color: string;
  price: number;
}

const Card: FC<CardProps> = ({ title, color, price, id }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handlerClickCard = () => {
    router.push(`${pathname}/${id}`);
  };

  return (
    <SCard onClick={handlerClickCard} cover={<Cover />}>
      <p>{title}</p>
      <SProperties>
        <SPrice>{color}</SPrice>
        <p>{getPriceWithSpace({ price })} &#8381;</p>
      </SProperties>
    </SCard>
  );
};

export default Card;
