import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const spacing = {
  side: "470px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
      box-sizing: border-box; //진짜 개~~중요
    }

    body{
        font-family: "Noto Sans KR", sans-serif;
        word-break: keep-all;
        color: #3d3c3a;
    }

    a{
      text-decoration: none;
      color: black;
    }

    li{
      list-style: none;
    }

    img{
      width: 100%;
      display: block;
    }
   
`;