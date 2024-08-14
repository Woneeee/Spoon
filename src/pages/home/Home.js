import { useEffect, useState } from "react";
import { cafe, hot, restaurant } from "../../api";
import styled from "styled-components";
import bg from "../../img/d.jpg";
import { useForm } from "react-hook-form";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { point } from "../../GlobalStyled";
import { routes } from "../../routes";
import { useScrollTop } from "../../lib/useScrollTop";
import { Title } from "../../components/Title";
import { IoClose } from "react-icons/io5";
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

const MainBanner = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  top: 0;
  left: 0;
  background: url(${bg}) no-repeat center / cover;
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(17, 17, 17, 0.4);
`;

const Brand = styled.div`
  h2 {
    font-size: 70px;
    font-weight: 900;
    color: white;
    position: relative;
    letter-spacing: -2px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Discover = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 35px;
    font-weight: 400px;
    color: white;
    position: relative;
    line-height: 48px;
    letter-spacing: 0.6px;
    text-align: center;
  }
`;

const Form = styled.form`
  all: unset;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  position: relative;
  border-radius: 12px;
  padding: 0 15px;

  button {
    all: unset;
    width: 100px;
    height: 65%;
    background-color: #c4f073;
    font-weight: 500;
    border-radius: 8px;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 11px;
    cursor: pointer;
    &:hover {
      background-color: #9cc05c;
      transition-duration: 0.3s;
    }
  }
`;

const Location = styled.div`
  display: flex;
  margin-right: 15px;
  input {
    all: unset;
    border-right: 1px solid rgba(17, 17, 17, 0.2);
  }
`;

const LocIcon = styled.div`
  margin-right: 15px;
  font-size: 20px;
`;

const Restaurant = styled.div`
  display: flex;
  input {
    all: unset;
    &::placeholder {
      font-size: 17px;
      font-style: italic;
    }
  }
`;

const SearchIcon = styled.div`
  margin-right: 15px;
  font-size: 20px;
`;

const DinCafe = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 85px;
`;

const Wrap = styled.ul`
  max-width: 1100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  li {
    width: 49%;
    height: 260px;
    border: 1px solid #88888835;

    border-radius: 17px;
    &:hover {
      transform: scale(1.03);
      transition-duration: 0.5s;
    }
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 70%;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 17px 17px 0 0;
  }
`;

const Text = styled.div`
  padding: 15px 20px;
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    letter-spacing: 0.3px;
    opacity: 0.7;
  }
`;

const Collection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  h2 {
    font-size: 36px;
    font-weight: 500;
  }
  p {
    margin-top: 15px;
    margin-bottom: 40px;
    font-size: 17px;
    opacity: 0.7;
    letter-spacing: 0.3px;
  }
`;

const ConWrap = styled.ul`
  width: 100%;
  height: 380px;
  li {
    width: 28%;
    height: 100%;
    border-radius: 15px;
    position: relative;
    h2 {
      font-size: 18px;
      font-weight: 400;
      position: absolute;
      left: 15px;
      bottom: 15px;
      color: white;
      letter-spacing: 0.3px;
    }
  }
`;

const ConImg = styled.div`
  height: 100%;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
  }
`;

const ConBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.78) 0%,
    rgba(0, 0, 0, 0.23021708683473385) 24%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const JustForDisplay = styled.div`
  display: ${(props) => props.$canLook};
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.92);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 480px;
  height: 600px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255);
  backdrop-filter: blur(5px);
  padding: 30px;
  border-radius: 10px;
  h3 {
    font-size: 40px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 50px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    background-color: white;
    border: 1px solid rgba(68, 68, 68, 0.4);
    margin-bottom: 10px;
    border-radius: 6px;
    font-size: 18px;
    &::placeholder {
      font-size: 16px;
      padding: 0 20px;
    }
  }

  button {
    all: unset;
    width: 100%;
    height: 60px;
    font-size: 18px;
    background-color: ${point.color};
    text-align: center;
    margin-top: 30px;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

const ErrorMessage = styled.div`
  color: crimson;
  margin-bottom: 10px;
`;

const GoSIgnUp = styled.div`
  margin-top: 70px;
  font-size: 17px;
  letter-spacing: 0px;
  a {
    text-decoration: underline;
    color: crimson;
  }
`;

const Close = styled.div`
  font-size: 30px;
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;

export const Home = () => {
  useScrollTop();

  const [resData, setResData] = useState();
  const [cafData, setCafData] = useState();

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

  console.log(resData);
  // console.log(cafData);

  const [isVisable, setIsVisable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = () => {};

  const viewHandler = () => {
    setIsVisable(true);
  };

  const closeHandler = () => {
    setIsVisable(false);
  };

  const navi = useNavigate();
  const searchHandler = ({ keyword }) => {
    const keyResult = resData.filter(
      (res) => res.CON_KEYWORDS.includes(keyword) === true
    );
    console.log(keyResult);
    // navi(`/detail/${keyResult[0].CON_UID}`);
  };

  // split 사용
  // console.log(resData[0]?.CON_KEYWORDS?.split(","));
  // console.log(Array.isArray(resData[0]?.CON_KEYWORDS?.split(",")));
  // {
  //   resData &&
  //     console.log(resData[0].CON_KEYWORDS.split(",").includes("포메인"));
  // }

  // 배열에 안넣음
  // {
  //   resData && console.log(resData[0].CON_KEYWORDS.includes("포메인"));
  // }

  return (
    <>
      <Title titleName="🏠" />
      <SHeader>
        <HeaderCon>
          <button>
            <FaMobileAlt />
            &nbsp;&nbsp;&nbsp;Get the App
          </button>

          <User>
            <li onClick={viewHandler}>Log in</li>
            <li>Sign up</li>
          </User>
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

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* 로그인 */}
      <JustForDisplay $canLook={isVisable ? "display" : "none"}>
        <LoginContainer>
          <LoginForm onSubmit={handleSubmit(loginHandler)}>
            <h3>Login</h3>
            <Close onClick={closeHandler}>
              <IoClose />
            </Close>

            <input
              {...register("username", {
                required: "아이디를 입력해주세요",
              })}
              type="text"
              placeholder="id"
            />
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>

            <input
              {...register("password", {
                required: "비밀번호를 입력해주세요",
              })}
              type="password"
              placeholder="password"
            />
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>

            <button>Login</button>
            <ErrorMessage style={{ textAlign: "center" }}></ErrorMessage>

            <GoSIgnUp>Spoon 회원이 아닌가요? 지금 가입 하세요 😊</GoSIgnUp>
          </LoginForm>
        </LoginContainer>
      </JustForDisplay>

      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* 회원가입 */}
    </>
  );
};
