import { GenderKeys, StructureKeys } from "@entities/product";

interface IInitialValues {
  searchQuery: string;
  gender: GenderKeys;
  category: StructureKeys;
  subCategory: StructureKeys | null;
  brand: number | null;
  price: [number, number];
  colors: string[];
  isDiscounts: boolean;
}

const initialValues: IInitialValues = {
  searchQuery: "",
  gender: GenderKeys.all,
  category: StructureKeys.all,
  subCategory: null,
  brand: null,
  price: [0, 100_000],
  colors: [],
  isDiscounts: false,
};

export { type IInitialValues, initialValues };
