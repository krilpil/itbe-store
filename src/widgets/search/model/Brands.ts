import { SelectProps } from "antd";

type IList = SelectProps["options"];

const BrandList: IList = [
  {
    label: "Все бренды",
    value: 0,
  },
  {
    label: "Adidas",
    value: 1,
  },
  {
    label: "Nike",
    value: 2,
  },
  {
    label: "Reebok",
    value: 3,
  },
];

export default BrandList;
