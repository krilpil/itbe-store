import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";

export const HouseIcon = styled(FontAwesomeIcon).attrs({
  icon: faHouse,
})``;

export const ChevronDownIcon = styled(FontAwesomeIcon).attrs({
  icon: faChevronDown,
})``;

export const MagnifyingGlassIcon = styled(FontAwesomeIcon).attrs({
  icon: faMagnifyingGlass,
})``;
