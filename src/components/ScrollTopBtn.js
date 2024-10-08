import { IoMdArrowDropupCircle } from "react-icons/io";
import styled from "styled-components";
import { point } from "../GlobalStyled";
import { useEffect, useState } from "react";

const TopBtn = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 99;
  font-size: 70px;
  color: ${point.color};
  cursor: pointer;
  opacity: ${(props) => props.$view};
  @media screen and (max-width: 510px) {
    right: 15px;
    bottom: 15px;
    font-size: 45px;
  }
`;

export const ScrollTopBtn = () => {
  const [viewBtn, setViewBtn] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 1000) {
        setViewBtn(true);
      } else {
        setViewBtn(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
  }, []);

  const btnHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <TopBtn $view={viewBtn ? "1" : "0"} onClick={btnHandler}>
      <IoMdArrowDropupCircle />
    </TopBtn>
  );
};
