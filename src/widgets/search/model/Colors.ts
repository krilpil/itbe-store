import { SelectProps } from "antd";

type IList = SelectProps["options"];

const ColorList: IList = [
  {
    label: "Мультиколор",
    value: 0,
  },
  {
    label: "Красный",
    value: 1,
  },
  {
    label: "Белый",
    value: 2,
  },
  {
    label: "Черный",
    value: 3,
  },
];

export default ColorList;
