import { useEffect, useState } from "react";
import { cafe, restaurant } from "../../api";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { point } from "../../GlobalStyled";
import { routes } from "../../routes";
import { useScrollTop } from "../../lib/useScrollTop";
import { Title } from "../../components/Title";
import { FaMobileAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {
  SHeader,
  HeaderCon,
  MainBanner,
  Bg,
  Brand,
  Discover,
  Form,
  Location,
  LocIcon,
  Restaurant,
  SearchIcon,
  DinCafe,
  Wrap,
  ImgBox,
  Text,
  Collection,
  Container,
  ConWrap,
  ConImg,
  ConBg,
} from "./components/HomeStyle";

export const Home = () => {
  useScrollTop();

  const [resData, setResData] = useState();
  const [cafData, setCafData] = useState();

  const { register, handleSubmit } = useForm();

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
        const {
          response: {
            body: {
              items: { item: cafResult },
            },
          },
        } = await cafe();

        setResData(resResult);
        setCafData(cafResult);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(resData);
  // console.log(cafData);

  const navi = useNavigate();
  const searchHandler = ({ keyword }) => {
    const keyResult = resData.filter(
      (res) => res.CON_KEYWORDS.includes(keyword) === true
    );
    const cafKeyResult = cafData.filter(
      (caf) => caf.CON_KEYWORDS.includes(keyword) === true
    );
    // console.log(keyResult);
    // console.log(cafKeyResult);
    const keyAllResult = keyResult.concat(cafKeyResult);

    keyAllResult.length !== 0 ? navi(`/searchresult/${keyword}`) : navi("/");
  };

  return (
    <>
      <Title titleName="🏠" />
      <SHeader>
        <HeaderCon>
          <button>
            <FaMobileAlt />
            &nbsp;&nbsp;&nbsp;Get the App
          </button>
        </HeaderCon>
      </SHeader>

      <MainBanner>
        <Bg />

        <Brand>
          <h2>
            Spoon&nbsp;
            <TbBowlSpoonFilled
              style={{
                backgroundColor: point.color,
                borderRadius: "20px",
                fontSize: "60px",
                color: point.deepcolor,
              }}
            />
          </h2>

          <Discover>
            <p>Discover the best restaurant and cafe in Gyeongju</p>
          </Discover>

          <Form onSubmit={handleSubmit(searchHandler)}>
            <Location>
              <LocIcon>
                <MdLocationOn />
              </LocIcon>
              <input type="text" value="경주" readOnly />
            </Location>

            <Restaurant>
              <SearchIcon>
                <AiOutlineSearch />
              </SearchIcon>
              <input
                {...register("keyword", {
                  required: false,
                })}
                type="text"
                placeholder="키워드를 입력해주세요..."
              />
            </Restaurant>

            <button>Search</button>
          </Form>
        </Brand>
      </MainBanner>

      {/* ------------------------------------------------------------------------------------------------------ */}

      <DinCafe>
        <Wrap>
          <li>
            <Link to={routes.dining}>
              <ImgBox>
                <img
                  src="https://images.unsplash.com/photo-1573225342350-16731dd9bf3d?q=80&w=2562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="dining"
                />
              </ImgBox>
              <Text>
                <h2>Dining</h2>
                <p>Visit the city's best dining venues</p>
              </Text>
            </Link>
          </li>

          <li>
            <Link to={routes.cafe}>
              <ImgBox>
                <img
                  src="https://images.unsplash.com/photo-1631206616601-79af875341d4?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="cafe"
                />
              </ImgBox>
              <Text>
                <h2>Cafe</h2>
                <p>Explore the city's best cafes </p>
              </Text>
            </Link>
          </li>
        </Wrap>
      </DinCafe>

      {/* ---------------------------------------------------------------------------------------------*/}

      <Collection>
        <Container>
          <h2>Collection</h2>
          <p>The restaurants and cafes that are talk of the town 🔥</p>

          <ConWrap>
            <li>
              <Link to={routes.hot}>
                <ConImg>
                  <img
                    src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="trend"
                  />
                </ConImg>
                <ConBg />

                <h2>Hot Places</h2>
              </Link>
            </li>
          </ConWrap>
        </Container>
      </Collection>
    </>
  );
};
