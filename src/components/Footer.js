import styled from "styled-components";

const SFooter = styled.div`
  height: 300px;
  border-top: 1px solid #555;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 500px;
  font-size: 15px;
`;

export const Footer = () => {
  return <SFooter>&copy; Woneeee 2024</SFooter>;
};
