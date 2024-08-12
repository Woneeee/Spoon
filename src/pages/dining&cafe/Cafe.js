import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useScrollTop } from "../../lib/useScrollTop";
import {
  MenuCon,
  MenuWrap,
  DinIcon,
  CafIcon,
  CollContainer,
  CollWrap,
  CollCon,
  CollBg,
  DinContainer,
  DinWrap,
  ResWrap,
  Con,
  Img,
  Detail,
} from "../dining&cafe/components/DinCafStyle";
import { Link } from "react-router-dom";
import { MdOutlineLocalDining } from "react-icons/md";
import { IoMdCafe } from "react-icons/io";
import { point } from "../../GlobalStyled";
import { cafe, restaurant } from "../../api";
import { IMG_BASE_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";
import { routes } from "../../routes";
import { Title } from "../../components/Title";

export const Cafe = () => {
  useScrollTop();

  const [cafData, setCafData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {
          response: {
            body: {
              items: { item: cafResult },
            },
          },
        } = await cafe();

        setCafData(cafResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(cafData);

  return (
    <>
      <Title titleName="☕" />
      <Header />

      {/* ------------------------------------------------------------------------------------ */}

      <MenuCon>
        <MenuWrap>
          <li>
            <Link to={routes.dining}>
              <DinIcon>
                <MdOutlineLocalDining />
              </DinIcon>
              <p>Dining</p>
            </Link>
          </li>
          <li className="colorOn">
            <Link to={routes.cafe}>
              <CafIcon>
                <IoMdCafe color="#76562a" />
              </CafIcon>
              <p style={{ color: point.deepcolor }}>Cafe</p>
            </Link>
          </li>
        </MenuWrap>
      </MenuCon>

      {/* ----------------------------------------------------------------------------------- */}

      <CollContainer>
        <CollWrap>
          <h2>Collection</h2>
          <p>The restaurants and cafes that are talk of the town 🔥</p>

          <CollCon>
            <li>
              <Link to={routes.hot}>
                <img
                  src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="trend"
                />
                <CollBg />

                <h2>Hot Places</h2>
              </Link>
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
            <h2>Nice view cafes in South Korea Gyeongju 🍰</h2>

            <ResWrap>
              {cafData.map((data) => (
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
                      {data.CON_KEYWORDS ? (
                        <p>{"# " + data.CON_KEYWORDS.slice(0, 25) + "..."}</p>
                      ) : (
                        ""
                      )}

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
