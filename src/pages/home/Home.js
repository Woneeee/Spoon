import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { Title } from "../../components/Title";
import styled from "styled-components";
import bg from "../../img/d.jpg";
import { useForm } from "react-hook-form";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { Loading } from "../../components/Loading";
import { spacing } from "../../GlobalStyled";

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
  -webkit-tap-highlight-color: transparent;
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
    border-radius: 8px;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  input {
    all: unset;
    border-right: 1px solid rgba(17, 17, 17, 0.2);
    &::placeholder {
      font-size: 17px;
      font-style: italic;
    }
  }
`;

const LocIcon = styled.div`
  margin-right: 15px;
  font-size: 20px;
`;

const Restaurant = styled.div`
  display: flex;
  align-items: center;
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
  padding: 0 ${spacing.side};
  margin-bottom: 85px;
`;

const Wrap = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  li {
    width: 49%;
    height: 260px;
    border: 1px solid #88888835;

    border-radius: 17px;
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
  padding: 0 ${spacing.side};
`;

const Container = styled.div`
  h2 {
    font-size: 36px;
    font-weight: 500;
  }
  p {
    margin-top: 15px;
    margin-bottom: 40px;
    font-size: 17px;
    opacity: 0.7;
  }
`;

const ConWrap = styled.ul`
  width: 100%;
  height: 360px;
  li {
    width: 28%;
    height: 100%;
    border-radius: 15px;
    position: relative;
    h2 {
      font-size: 18px;
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
    border-radius: 15px;
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

export const Home = () => {
  const [resData, setResData] = useState();
  const [isLoading, setIsLoading] = useState(true);
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

        setResData(resResult);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(resData);

  const [sortId, setSortId] = useState();

  const searchHandler = ({ sort }) => {
    if (sort === "한식") {
      setSortId(1001);
    } else if (sort === "양식") {
      setSortId(1000);
    } else if (sort === "일식") {
      setSortId(1002);
    } else if (sort === "중식") {
      setSortId(1003);
    }
  };

  return (
    <>
      <MainBanner>
        <Bg />

        <Brand>
          <h2>
            Spoon&nbsp;
            <TbBowlSpoonFilled
              style={{
                backgroundColor: "#c4f073",
                borderRadius: "20px",
                fontSize: "60px",
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
                {...register("sort", {
                  required: false,
                })}
                type="text"
                placeholder="양식, 한식, 일식, 중식..."
              />
            </Restaurant>

            <Link to={`/search/${sortId && sortId}`}>
              <button>Search</button>
            </Link>
          </Form>
        </Brand>
      </MainBanner>

      {/* ------------------------------------------------------------------------------------------------------ */}

      <DinCafe>
        <Wrap>
          <li>
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
          </li>
          <li>
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
          </li>
        </Wrap>
      </DinCafe>

      <Collection>
        <Container>
          <h2>Collection</h2>
          <p>Find top restaurant and cafes in Gyeongju based on Trends</p>

          <ConWrap>
            <li>
              <ConImg>
                <img
                  src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="trend"
                />
              </ConImg>
              <ConBg />

              <h2>Top Trending Spots</h2>
            </li>
          </ConWrap>
        </Container>
      </Collection>
    </>
  );
};
