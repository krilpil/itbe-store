import { SegmentedProps } from "antd";
import { Gender } from "@entities/product";

type IList = SegmentedProps["options"];

const GenderList: IList = [
  {
    label: Gender[2].label,
    value: Gender[2].key,
  },
  {
    label: Gender[0].label,
    value: Gender[0].key,
  },
  {
    label: Gender[1].label,
    value: Gender[1].key,
  },
];

export default GenderList;
