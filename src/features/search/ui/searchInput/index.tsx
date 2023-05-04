import {
  SInput,
  SSelect,
  STagList,
  SWrapper,
  SSelectWithInput,
  STag,
  SMagnifyingGlassIcon,
} from "./searchInput.styles";

const EnterButton = () => (
  <span>
    <SMagnifyingGlassIcon />
    Найти!
  </span>
);

const SearchInput = () => {
  return (
    <SWrapper>
      <SSelectWithInput>
        <SSelect defaultValue="Все категории" />
        <SInput enterButton={<EnterButton />} />
      </SSelectWithInput>
      <STagList>
        <STag>Красная оксфордская рубашка</STag>
        <STag>Красный вязаный джемпер</STag>
        <STag>Выбеленная розовая футболка</STag>
        <STag>Коричневая флисовая толстовка</STag>
        <STag>Бежевые кроссовки</STag>
        <STag>Черные кроссовки</STag>
      </STagList>
    </SWrapper>
  );
};

export default SearchInput;
