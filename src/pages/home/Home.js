import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { Title } from "../../components/Title";
import styled from "styled-components";
import bg from "../../img/a.jpg";
import { FaUtensilSpoon } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const MainBanner = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  top: 0;
  left: 0;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

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
    font-weight: 700;
    color: white;
    position: relative;
    letter-spacing: -1px;
    text-align: center;
    margin-bottom: 30px;
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
  width: 100%;
  height: 60px;
  font-size: 17px;
  background-color: white;
  position: relative;
  border-radius: 8px;
`;

const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    all: unset;
    border-right: 1px solid rgba(17, 17, 17, 0.2);
  }
`;

const Restaurant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    all: unset;
  }
`;

export const Home = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <>
      <MainBanner>
        <Bg />

        <Brand>
          <h2>
            Spoon&nbsp;
            <FaUtensilSpoon
              style={{
                backgroundColor: "#c4f073",
                borderRadius: "20px",
              }}
            />
          </h2>

          <Discover>
            <p>Discover the best restaurant and cafe in Gyeongju</p>
          </Discover>

          <Form>
            <Location>
              <MdLocationOn />
              <input type="text" placeholder="Dong name" />
            </Location>

            <Restaurant>
              <AiOutlineSearch />
              <input type="text" placeholder="Restaurant name" />
            </Restaurant>
          </Form>
        </Brand>
      </MainBanner>
    </>
  );
};
