export enum StructureKeys {
  clothing,
  clothingTShirt,
  clothingJacket,
  shoes,
  shoesSneakers,
  shoesBoots,
  accessories,
  accessoriesGlasses,
  accessoriesWatch,
}

type IStructureItem = {
  key: StructureKeys;
  label: string;
};

interface IStructureItemWithChildren extends IStructureItem {
  children?: IStructureItem[];
}

export type IStructure = IStructureItemWithChildren;

const Structures: IStructure[] = [
  {
    key: StructureKeys.clothing,
    label: "Одежда",
    children: [
      {
        key: StructureKeys.clothingTShirt,
        label: "Футболки",
      },
      { key: StructureKeys.clothingJacket, label: "Куртки" },
    ],
  },
  {
    key: StructureKeys.shoes,
    label: "Обувь",
    children: [
      { key: StructureKeys.shoesSneakers, label: "Кроссовки" },
      { key: StructureKeys.shoesBoots, label: "Сапоги" },
    ],
  },
  {
    key: StructureKeys.accessories,
    label: "Аксессуары",
    children: [
      { key: StructureKeys.accessoriesGlasses, label: "Очки" },
      { key: StructureKeys.accessoriesWatch, label: "Часы" },
    ],
  },
];

export default Structures;
