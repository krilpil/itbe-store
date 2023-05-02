import { SInput, SSearchInput, SSelect } from "./searchInput.styles";

const SearchInput = () => {
  return (
    <SSearchInput>
      <SSelect defaultValue="Все категории" />
      <SInput />
    </SSearchInput>
  );
};

export default SearchInput;
