import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { Title } from "../../components/Title";
import styled from "styled-components";
import bg from "../../img/a.jpg";
import { FaUtensilSpoon } from "react-icons/fa";

const MainBanner = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  top: 0;
  left: 0;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

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
  background-color: rgba(17, 17, 17, 0.3);
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

const Form = styled.form``;

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

          <Form></Form>
        </Brand>
      </MainBanner>
    </>
  );
};
