import { SSearch, SSegmented } from "./search.styles";
import SearchInput from "./searchInput";

const Search = () => {
  return (
    <SSearch>
      <SSegmented defaultValue="Не важно" options={["Женщинам", "Не важно", "Мужчинам"]} />
      <SearchInput />
    </SSearch>
  );
};

export default Search;
