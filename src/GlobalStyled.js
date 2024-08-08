import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    body{
        font-family: "Noto Sans KR", sans-serif;
    }
`;
