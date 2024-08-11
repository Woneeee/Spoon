import styled from "styled-components";
import { point } from "../../../GlobalStyled";

export const MenuCon = styled.section`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MenuWrap = styled.ul`
  max-width: 1100px;
  width: 100%;
  display: flex;
  a {
    display: flex;
    align-items: center;
  }
  li {
    padding: 20px;
    margin-right: 50px;
    font-size: 22px;
    font-weight: 500;
  }
  .colorOn {
    border-bottom: 3px solid ${point.deepcolor};
  }
`;

export const DinIcon = styled.div`
  margin-right: 10px;
  font-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #88888815;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CafIcon = styled.div`
  margin-right: 10px;
  font-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #88888815;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CollContainer = styled.div`
  width: 100%;
  background-color: #88888815;
  display: flex;
  justify-content: center;
`;

export const CollWrap = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 20px 0;
  h2 {
    font-size: 30px;
    font-weight: 500;
  }
  p {
    margin-top: 40px;
    opacity: 0.7;
    font-size: 18px;
    letter-spacing: 0.3px;
  }
`;

export const CollCon = styled.ul`
  margin-top: 15px;
  width: 100%;
  height: 370px;
  li {
    position: relative;
    width: 26%;
    height: 100%;
    img {
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
    h2 {
      font-size: 17px;
      font-weight: 400;
      position: absolute;
      left: 15px;
      bottom: 15px;
      color: white;
      letter-spacing: 0.3px;
    }
  }
`;

export const CollBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 13px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.78) 0%,
    rgba(0, 0, 0, 0.23021708683473385) 24%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const DinContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DinWrap = styled.div`
  max-width: 1100px;
  width: 100%;
  margin-top: 80px;
  h2 {
    font-size: 30px;
    font-weight: 500;
  }
`;

export const ResWrap = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  row-gap: 45px;
`;

export const Con = styled.div`
  height: 420px;
  border-radius: 15px;
  padding: 10px;
  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-top: 10px;
  }
  &:hover {
    border: 1px solid #66666620;
    box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 10px;
  }
`;

export const Img = styled.div`
  height: 75%;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const Detail = styled.div`
  p {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 8px;
    line-height: 20px;
    opacity: 0.8;
  }
  span {
    font-size: 14px;
    opacity: 0.6;
  }
`;
