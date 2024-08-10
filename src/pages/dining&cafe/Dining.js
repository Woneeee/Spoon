import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { Header } from "../../components/Header";
import { MdOutlineLocalDining } from "react-icons/md";
import { IoMdCafe } from "react-icons/io";
import styled from "styled-components";

const MenuCon = styled.section`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MenuWrap = styled.ul`
  max-width: 1100px;
  width: 100%;
  display: flex;
  li {
    margin-right: 50px;
    display: flex;
    align-items: center;
    font-size: 23px;
    font-weight: 500;
  }
`;

const DinIcon = styled.div`
  margin-right: 10px;
  font-size: 35px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #88888815;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CafIcon = styled.div`
  margin-right: 10px;
  font-size: 35px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #88888815;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CollContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  background-color: pink;
  display: flex;
  justify-content: center;
`;

const CollWrap = styled.div`
  max-width: 1100px;
  width: 100%;
  background-color: gray;
  padding: 20px;
  h2 {
    font-size: 30px;
    font-weight: 500;
  }
  p {
    margin-top: 15px;
    opacity: 0.7;
  }
`;

const CollCon = styled.ul``;

const CollBg = styled.div``;

export const Dining = () => {
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

  console.log(resData);

  return (
    <>
      <Header />

      <MenuCon>
        <MenuWrap>
          <li>
            <DinIcon>
              <MdOutlineLocalDining />
            </DinIcon>
            <p>Dining</p>
          </li>
          <li>
            <CafIcon>
              <IoMdCafe />
            </CafIcon>
            <p>Cafe</p>
          </li>
        </MenuWrap>
      </MenuCon>

      <CollContainer>
        <CollWrap>
          <h2>Collection</h2>
          <p>Find top restaurants and cafes in Gyeongju based on Trends</p>

          <CollCon>
            <li>
              <img
                // src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="trend"
              />
              <CollBg />

              <h2></h2>
            </li>
          </CollCon>
        </CollWrap>
      </CollContainer>
    </>
  );
};
