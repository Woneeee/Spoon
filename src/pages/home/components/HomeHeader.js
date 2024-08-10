import styled from "styled-components";
import { FaMobileAlt } from "react-icons/fa";

const SHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

const HeaderCon = styled.div`
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
`;

const User = styled.ul`
  display: flex;
  color: white;
  li {
    margin-left: 30px;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const HomeHeader = () => {
  return (
    <SHeader>
      <HeaderCon>
        <button>
          <FaMobileAlt />
          &nbsp;&nbsp;&nbsp;Get the App
        </button>

        <User>
          <li>Log in</li>
          <li>Sign up</li>
        </User>
      </HeaderCon>
    </SHeader>
  );
};
