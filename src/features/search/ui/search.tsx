import { Tag } from "antd";
import { SSearch, STags } from "./search.styles";
import SearchInput from "./searchInput";

const Search = () => {
  return (
    <SSearch>
      <SearchInput />
      <STags>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
      </STags>
    </SSearch>
  );
};

export default Search;
