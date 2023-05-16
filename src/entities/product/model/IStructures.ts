// export enum StructureKeys {
//   all,
//   clothing,
//   allClothing,
//   clothingTShirt,
//   clothingJacket,
//   shoes,
//   allShoes,
//   shoesSneakers,
//   shoesBoots,
//   accessories,
//   allAccessories,
//   accessoriesGlasses,
//   accessoriesWatch,
// }

type IStructureItem = {
  key: string;
  label: string;
};

interface IStructureItemWithChildren extends IStructureItem {
  children?: IStructureItem[];
}

export type IStructure = IStructureItemWithChildren;

const IStructures: IStructure[] = [
  {
    key: "1",
    label: "Одежда",
    children: [
      { key: "11", label: "Вся одежда" },
      { key: "12", label: "Футболки" },
      { key: "13", label: "Куртки" },
    ],
  },
  {
    key: "2",
    label: "Обувь",
    children: [
      { key: "21", label: "Вся обувь" },
      { key: "22", label: "Кроссовки" },
      { key: "23", label: "Сапоги" },
    ],
  },
  {
    key: "3",
    label: "Аксессуары",
    children: [
      { key: "31", label: "Все аксессуары" },
      { key: "32", label: "Очки" },
      { key: "33", label: "Часы" },
    ],
  },
];

export default IStructures;
