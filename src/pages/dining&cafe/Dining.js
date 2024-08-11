import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { Header } from "../../components/Header";
import { MdOutlineLocalDining } from "react-icons/md";
import { IoMdCafe } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { Loading } from "../../components/Loading";
import { IMG_BASE_URL } from "../../constant/imgUrl";
import { useScrollTop } from "../../lib/useScrollTop";
import { point } from "../../GlobalStyled";
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

export const Dining = () => {
  useScrollTop();

  const [resData, setResData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
  //

  return (
    <>
      <Header />

      {/* ------------------------------------------------------------------------------------ */}

      <MenuCon>
        <MenuWrap>
          <li className="colorOn">
            <Link to={routes.dining}>
              <DinIcon>
                <MdOutlineLocalDining color="crimson" />
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
          <p>Find hot restaurants and cafes in Gyeongju 🔥</p>

          <CollCon>
            <li>
              <img
                src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="trend"
              />
              <CollBg />

              <h2>Hot Places</h2>
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
            <h2>Trending dining restaurants in South Korea Gyeongju 🍽️</h2>

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
                      <p>{"# " + data.CON_KEYWORDS.slice(0, 33) + "..."}</p>
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
