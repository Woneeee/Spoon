import { useEffect, useState } from "react";
import { restaurant } from "../api";
import styled from "styled-components";
import { FaMobileAlt } from "react-icons/fa";
import { spacing } from "../GlobalStyled";

const SHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px ${spacing.side};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;

  button {
    all: unset;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 400;
  }
`;

const User = styled.ul`
  display: flex;
  color: white;
  li {
    margin-left: 30px;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
  }
`;

export const Header = () => {
  const [resData, setResData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const {
          response: {
            body: {
              items: { item: resResult },
            },
          },
        } = await restaurant();

        setResData(resResult);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SHeader>
      <button>
        <FaMobileAlt />
        &nbsp;&nbsp;&nbsp;Get the App
      </button>

      <User>
        <li>Log in</li>
        <li>Sign up</li>
      </User>
    </SHeader>
  );
};
