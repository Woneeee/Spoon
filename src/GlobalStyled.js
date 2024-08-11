import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const spacing = {
  side: "470px",
};

export const point = {
  color: "#c4f073",
  deepcolor: "#3a3d",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
      box-sizing: border-box; 
    }

    body{
        font-family: "Noto Sans KR", sans-serif;
        word-break: keep-all;
        color: #2e2e2e;
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
