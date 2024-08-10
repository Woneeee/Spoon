import styled from "styled-components";

const SFooter = styled.div`
  height: 240px;
  /* border-top: 1px solid #555; */
  background-color: #3d3c3a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  font-size: 15px;
  color: #f0f0f0;
`;

export const Footer = () => {
  return <SFooter>&copy; Woneeee 2024</SFooter>;
};
