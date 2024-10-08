import styled from "styled-components";
import bg from "../../../img/d.jpg";
import { spacing } from "../../../GlobalStyled";

export const SHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const HeaderCon = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    all: unset;
    cursor: pointer;
    color: white;
    font-size: 16px;
  }
  @media screen and (max-width: 510px) {
    padding: ${spacing.moside};
  }
`;

export const MainBanner = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  top: 0;
  left: 0;
  background: url(${bg}) no-repeat center / cover;
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 510px) {
    height: 850px;
  }
`;

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(17, 17, 17, 0.4);
`;

export const Brand = styled.div`
  h2 {
    font-size: 70px;
    font-weight: 900;
    color: white;
    position: relative;
    letter-spacing: -2px;
    text-align: center;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 510px) {
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 50px;
      margin-bottom: 20px;
    }
  }
`;

export const Discover = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 35px;
    font-weight: 400px;
    color: white;
    position: relative;
    line-height: 48px;
    letter-spacing: 0.6px;
    text-align: center;
  }
  @media screen and (max-width: 510px) {
    margin-bottom: 20px;
    p {
      font-size: 26px;
      line-height: 35px;
    }
  }
`;

export const Form = styled.form`
  /* all: unset; */ // form에다가는 unset 넣지 말기 이상해짐
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  position: relative;
  border-radius: 12px;
  padding: 0 15px;

  button {
    all: unset;
    width: 100px;
    height: 65%;
    background-color: #c4f073;
    font-weight: 500;
    border-radius: 8px;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 11px;
    cursor: pointer;
    &:hover {
      background-color: #9cc05c;
      transition-duration: 0.3s;
    }
  }
  @media screen and (max-width: 510px) {
    max-width: 400px;
    width: 90%;
    height: 100%;
    flex-direction: column;
    background-color: transparent;
    padding: 0;
    button {
      position: static; // 기본값
      width: 100%;
      height: 45px;
      border-radius: 5px;
    }
  }
`;

export const Location = styled.div`
  display: flex;
  margin-right: 15px;
  input {
    all: unset;
    border-right: 1px solid rgba(17, 17, 17, 0.2);
  }
  @media screen and (max-width: 510px) {
    width: 100%;
    padding: 10px;
    background-color: white;
    margin-right: 0;
    margin-bottom: 10px;
    border-radius: 5px;
    input {
      width: 100%;
      border: none;
      /* background-color: beige; */
      padding: 0 10px;
    }
  }
`;

export const LocIcon = styled.div`
  margin-right: 15px;
  font-size: 20px;
`;

export const Restaurant = styled.div`
  display: flex;
  input {
    all: unset;
    &::placeholder {
      font-size: 17px;
      font-style: italic;
    }
  }
  @media screen and (max-width: 510px) {
    width: 100%;
    padding: 10px;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 5px;
    input {
      width: 100%;
      /* background-color: beige; */
      padding: 0 10px;
    }
  }
`;

export const SearchIcon = styled.div`
  margin-right: 15px;
  font-size: 20px;
`;

export const DinCafe = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 85px;
`;

export const Wrap = styled.ul`
  max-width: 1100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  li {
    width: 49%;
    height: 260px;
    border: 1px solid #88888835;

    border-radius: 17px;
    &:hover {
      transform: scale(1.03);
      transition-duration: 0.5s;
    }
  }
  @media screen and (max-width: 510px) {
    padding: ${spacing.moside};
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 70%;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 17px 17px 0 0;
  }
`;

export const Text = styled.div`
  padding: 15px 20px;
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    letter-spacing: 0.3px;
    opacity: 0.7;
  }
  @media screen and (max-width: 510px) {
    padding: 10px;
    h2 {
      font-size: 18px;
      margin-bottom: 8px;
    }
    p {
      font-size: 15px;
      line-height: 17px;
    }
  }
`;

export const Collection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  h2 {
    font-size: 36px;
    font-weight: 500;
  }
  p {
    margin-top: 15px;
    margin-bottom: 40px;
    font-size: 17px;
    opacity: 0.7;
    letter-spacing: 0.3px;
  }
  @media screen and (max-width: 510px) {
    padding: ${spacing.moside};
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 30px;
    }
  }
`;

export const ConWrap = styled.ul`
  width: 100%;
  height: 380px;
  li {
    width: 28%;
    height: 100%;
    border-radius: 15px;
    position: relative;
    h2 {
      font-size: 18px;
      font-weight: 400;
      position: absolute;
      left: 15px;
      bottom: 15px;
      color: white;
      letter-spacing: 0.3px;
    }
  }
  @media screen and (max-width: 510px) {
    li {
      width: 100%;
    }
  }
`;

export const ConImg = styled.div`
  height: 100%;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
  }
`;

export const ConBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.78) 0%,
    rgba(0, 0, 0, 0.23021708683473385) 24%,
    rgba(255, 255, 255, 0) 100%
  );
`;
