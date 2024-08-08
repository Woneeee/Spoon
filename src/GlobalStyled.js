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
        
    }

   
`;
