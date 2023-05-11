export enum StructureKeys {
  all,
  clothing,
  allClothing,
  clothingTShirt,
  clothingJacket,
  shoes,
  allShoes,
  shoesSneakers,
  shoesBoots,
  accessories,
  allAccessories,
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

const IStructures: IStructure[] = [
  {
    key: StructureKeys.all,
    label: "Не важно",
  },
  {
    key: StructureKeys.clothing,
    label: "Одежда",
    children: [
      { key: StructureKeys.allClothing, label: "Вся одежда" },
      { key: StructureKeys.clothingTShirt, label: "Футболки" },
      { key: StructureKeys.clothingJacket, label: "Куртки" },
    ],
  },
  {
    key: StructureKeys.shoes,
    label: "Обувь",
    children: [
      { key: StructureKeys.allShoes, label: "Вся обувь" },
      { key: StructureKeys.shoesSneakers, label: "Кроссовки" },
      { key: StructureKeys.shoesBoots, label: "Сапоги" },
    ],
  },
  {
    key: StructureKeys.accessories,
    label: "Аксессуары",
    children: [
      { key: StructureKeys.allAccessories, label: "Все аксессуары" },
      { key: StructureKeys.accessoriesGlasses, label: "Очки" },
      { key: StructureKeys.accessoriesWatch, label: "Часы" },
    ],
  },
];

export default IStructures;
