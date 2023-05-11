import { GenderKeys, StructureKeys } from "@entities/product";

interface IInitialValues {
  searchQuery: string;
  gender: GenderKeys;
  category: StructureKeys;
  subCategory: StructureKeys | null;
}

const initialValues: IInitialValues = {
  searchQuery: "",
  gender: GenderKeys.all,
  category: StructureKeys.all,
  subCategory: null,
};

export { type IInitialValues, initialValues };
