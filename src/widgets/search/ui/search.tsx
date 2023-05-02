import { Space, Tag } from "antd";
import { SSearch, STitle } from "./search.styles";
import SearchInput from "./searchInput";

const Search = () => {
  return (
    <SSearch>
      <STitle>Найди всю одежду, обувь и аксессуары здесь!</STitle>
      <SearchInput />
      <Space>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
        <Tag>Кроссовки adidas</Tag>
      </Space>
    </SSearch>
  );
};

export default Search;
