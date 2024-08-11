import { MoonLoader } from "react-spinners";
import styled from "styled-components";
import { point } from "../GlobalStyled";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <MoonLoader color={point.color} size={80} />
    </Wrap>
  );
};
