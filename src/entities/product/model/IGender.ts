enum GenderKeys {
  all,
  men,
  women,
}

type IStructureItem = {
  key: GenderKeys;
  label: string;
};

const Gender: IStructureItem[] = [
  {
    key: GenderKeys.all,
    label: "Не важно",
  },
  {
    key: GenderKeys.men,
    label: "Мужчинам",
  },
  {
    key: GenderKeys.women,
    label: "Женщинам",
  },
];

export { GenderKeys };
export default Gender;
