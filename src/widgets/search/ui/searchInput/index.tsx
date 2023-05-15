import { useFormikContext } from "formik";
import { IInitialValues } from "@widgets/search/model/IForm";
import { Categories } from "@widgets/search/model/Category";
import { Form, SegmentedProps } from "antd";
import GenderList from "@widgets/search/model/Gender";
import { useDevice } from "@shared/lib";
import {
  SInput,
  SMagnifyingGlassIcon,
  SSelect,
  SSelectWithInput,
  STag,
  STagList,
  SWrapper,
  SSearch,
  SSegmented,
} from "./search.styles";

const EnterButton = () => (
  <span>
    <SMagnifyingGlassIcon />
    Найти!
  </span>
);

const SearchInput = () => {
  const { isMobile } = useDevice();
  const { values, handleChange, handleSubmit, setFieldValue } = useFormikContext<IInitialValues>();

  const handlerSearch = () => {
    handleSubmit();
  };

  const sizeSegmented: SegmentedProps["size"] = isMobile ? "small" : "middle";

  return (
    <SSearch>
      <SSegmented
        name="gender"
        value={values.gender}
        onChange={e => setFieldValue("gender", e)}
        defaultValue="Не важно"
        options={GenderList}
        size={sizeSegmented}
      />
      <SWrapper>
        <SSelectWithInput>
          <Form.Item noStyle valuePropName="category">
            <SSelect
              value={values.category}
              onChange={e => setFieldValue("category", e)}
              options={Categories}
            />
          </Form.Item>
          <Form.Item noStyle>
            <SInput
              name="searchQuery"
              value={values.searchQuery}
              onChange={handleChange}
              onSearch={handlerSearch}
              enterButton={<EnterButton />}
            />
          </Form.Item>
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
    </SSearch>
  );
};

export default SearchInput;
