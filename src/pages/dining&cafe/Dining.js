import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { Header } from "../../components/Header";
import { MdOutlineLocalDining } from "react-icons/md";
import { IoMdCafe } from "react-icons/io";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";
import { Loading } from "../../components/Loading";
import { IMG_BASE_URL } from "../../constant/imgUrl";
import { useScrollTop } from "../../lib/useScrollTop";
import { point } from "../../GlobalStyled";

const MenuCon = styled.section`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MenuWrap = styled.ul`
  max-width: 1100px;
  width: 100%;
  display: flex;
  a {
    display: flex;
    align-items: center;
  }
  li {
    padding: 20px;
    margin-right: 50px;
    font-size: 22px;
    font-weight: 500;
    &:nth-child(1) {
      border-bottom: 3px solid ${point.deepcolor};
    }
  }
`;

const DinIcon = styled.div`
  margin-right: 10px;
  font-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #88888815;
  display: flex;
  justify-content: center;
  align-items: center;
  color: crimson;
`;

const CafIcon = styled.div`
  margin-right: 10px;
  font-size: 30px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #88888815;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CollContainer = styled.div`
  width: 100%;
  background-color: #88888815;
  display: flex;
  justify-content: center;
`;

const CollWrap = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 20px 0;
  h2 {
    font-size: 30px;
    font-weight: 500;
  }
  p {
    margin-top: 40px;
    opacity: 0.7;
    font-size: 18px;
    letter-spacing: 0.3px;
  }
`;

const CollCon = styled.ul`
  margin-top: 15px;
  width: 100%;
  height: 360px;
  li {
    position: relative;
    width: 26%;
    height: 100%;
    img {
      height: 100%;
      border-radius: 12px;
      object-fit: cover;
    }
    h2 {
      font-size: 17px;
      font-weight: 400;
      position: absolute;
      left: 15px;
      bottom: 15px;
      color: white;
      letter-spacing: 0.3px;
    }
  }
`;

const CollBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 13px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.78) 0%,
    rgba(0, 0, 0, 0.23021708683473385) 24%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const DinContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DinWrap = styled.div`
  max-width: 1100px;
  width: 100%;
  margin-top: 80px;
  h2 {
    font-size: 30px;
    font-weight: 500;
  }
`;

const ResWrap = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 35px;
`;

const Con = styled.div`
  height: 350px;
  border-radius: 15px;
  padding: 10px;
  h3 {
    font-size: 17px;
    font-weight: 500;
    margin-top: 10px;
  }
  &:hover {
    /* transform: scale(1.03); */
    border: 1px solid #66666620;
    box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 10px;
    /* transition-duration: 0.4s; */
  }
`;

const Img = styled.div`
  height: 75%;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const Detail = styled.div`
  p {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 8px;
    opacity: 0.8;
  }
  span {
    font-size: 14px;
    opacity: 0.6;
  }
`;

export const Dining = () => {
  const [resData, setResData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useScrollTop();

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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(resData);

  return (
    <>
      <Header />

      {/* ------------------------------------------------------------------------------------ */}

      <MenuCon>
        <MenuWrap>
          <li>
            <Link to={routes.dining}>
              <DinIcon>
                <MdOutlineLocalDining />
              </DinIcon>
              <p style={{ color: point.deepcolor }}>Dining</p>
            </Link>
          </li>
          <li>
            <Link to={routes.cafe}>
              <CafIcon>
                <IoMdCafe />
              </CafIcon>
              <p>Cafe</p>
            </Link>
          </li>
        </MenuWrap>
      </MenuCon>

      {/* ----------------------------------------------------------------------------------- */}

      <CollContainer>
        <CollWrap>
          <h2>Collection</h2>
          <p>Find top restaurants and cafes in Gyeongju based on Trends</p>

          <CollCon>
            <li>
              <img
                src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="trend"
              />
              <CollBg />

              <h2>Top Trending Spots</h2>
            </li>
          </CollCon>
        </CollWrap>
      </CollContainer>

      {/* -------------------------------------------------------------------------------------- */}

      {isLoading ? (
        <Loading />
      ) : (
        <DinContainer>
          <DinWrap>
            <h2>Trending dining restaurants in South Korea Gyeongju 😊</h2>

            <ResWrap>
              {resData.map((data) => (
                <Link key={data.CON_UID} to={`/detail/${data.CON_UID}`}>
                  <Con>
                    <Img>
                      <img
                        src={IMG_BASE_URL + data.CON_IMGFILENAME}
                        alt="restaurant"
                      />
                    </Img>
                    <h3>{data.CON_TITLE}</h3>
                    <Detail>
                      <p>{"# " + data.CON_KEYWORDS.slice(0, 25) + "..."}</p>
                      <span>{data.CON_ADDRESS}</span>
                    </Detail>
                  </Con>
                </Link>
              ))}
            </ResWrap>
          </DinWrap>
        </DinContainer>
      )}
    </>
  );
};
