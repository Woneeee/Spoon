import { useEffect, useState } from "react";
import { hot } from "../../api";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { useScrollTop } from "../../lib/useScrollTop";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BanContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const BanWrap = styled.div`
  max-width: 1100px;
  width: 100%;
  height: 350px;
  background: url("https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    no-repeat center / cover;
  position: relative;
  border-radius: 10px;
`;

const Text = styled.div`
  width: 50%;
  height: 60%;
  background-color: rgba(28, 28, 28, 0.86);
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 12px;
  color: white;
  padding: 20px;
  p {
    width: 480px;
    font-size: 15px;
    margin-top: 15px;
    line-height: 22px;
    opacity: 0.8;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 14px;
    opacity: 0.8;
  }
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 40px;
  font-weight: 500;
`;

const HotContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  margin-top: 50px;
`;

const HotWrap = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: aliceblue;
  column-gap: 20px;
  row-gap: 20px;
`;

const Con = styled.div`
  height: 300px;
  background-color: bisque;
  border-radius: 12px;
`;

const Img = styled.div`
  width: 100%;
  height: 70%;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const Detail = styled.div``;

export const Hot = () => {
  useScrollTop();

  const [hotData, setHotData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {
          response: {
            body: {
              items: { item: hotResult },
            },
          },
        } = await hot();

        setHotData(hotResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(hotData);

  return (
    <>
      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BanContainer>
            <BanWrap>
              <Text>
                <h5>SPOON COLLECTION</h5>
                <Title>Hot Places</Title>
                <p>
                  The restaurants that are talk of the town. Look out for more
                  such popular places!
                </p>
                <span>{hotData.length} Places</span>
              </Text>
            </BanWrap>
          </BanContainer>

          <HotContainer>
            <HotWrap>
              {hotData.map((data) => (
                <Link key={data.CON_UID} to={`/detail/${data.CON_UID}`}>
                  <Con>
                    <Img>
                      <img src={data.CON_IMGFILENAME} alt={data.CON_TITLE} />
                    </Img>
                    <h3>{data.CON_TITLE}</h3>
                    <Detail>
                      <p>{"# " + data.AREA_NAME}</p>
                      <span>{data.CON_DESC1}</span>
                    </Detail>
                  </Con>
                </Link>
              ))}
            </HotWrap>
          </HotContainer>
        </>
      )}
    </>
  );
};
