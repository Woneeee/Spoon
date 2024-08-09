import { IoMdArrowDropupCircle } from "react-icons/io";
import styled from "styled-components";
import { point } from "../GlobalStyled";

const TopBtn = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  font-size: 50px;
  color: ${point.color};
  cursor: pointer;
`;

const btnHandler = () => {};

export const ScrollTopBtn = () => {
  return (
    <TopBtn onClick={btnHandler}>
      <IoMdArrowDropupCircle />
    </TopBtn>
  );
};
