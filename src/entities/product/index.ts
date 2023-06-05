import IStructures, { IStructure } from "./model/IStructures";
import Gender, { GenderKeys } from "./model/IGender";
import ProductSlice, { setProductList } from "./model/product.slice";
import { selectorProductList } from "./model/product.selectors";

export {
  ProductSlice,
  setProductList,
  selectorProductList,
  IStructures,
  Gender,
  GenderKeys,
  type IStructure,
};
