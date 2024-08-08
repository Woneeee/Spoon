import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { Title } from "../../components/Title";
import styled from "styled-components";
import bg from "../../img/d.jpg";
import { useForm } from "react-hook-form";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { TbBowlSpoonFilled } from "react-icons/tb";

const MainBanner = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  top: 0;
  left: 0;

  background: url(${bg}) no-repeat center / cover;

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
    font-style: italic;
  }
`;

const Discover = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 36px;
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

export const Home = () => {
  const [resData, setResData] = useState();

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

  console.log(resData);

  const searchHandler = ({ dongName, resName }) => {
    if (resName === resData.map((res) => res.CON_TITLE)) {
      console.log("검색 결과가 나왔습니다.");
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
              <input
                {...register("dongName", {
                  required: false,
                })}
                type="text"
                placeholder="Dong name..."
              />
            </Location>

            <Restaurant>
              <SearchIcon>
                <AiOutlineSearch />
              </SearchIcon>
              <input
                {...register("resName", {
                  required: false,
                })}
                type="text"
                placeholder="Restaurant name..."
              />
            </Restaurant>

            <button>Search</button>
          </Form>
        </Brand>
      </MainBanner>
    </>
  );
};
