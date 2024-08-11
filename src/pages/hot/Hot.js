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
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
  position: relative;
  border-radius: 10px;
`;

const Text = styled.div`
  width: 50%;
  height: 60%;
  background-color: rgba(28, 28, 28, 0.86);
  backdrop-filter: blur(2px);
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 12px;
  color: white;
  padding: 20px;
  p {
    max-width: 480px;
    width: 100%;
    font-size: 15px;
    font-weight: 300;
    margin-top: 15px;
    line-height: 22px;
    opacity: 0.8;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 300;
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
  margin-top: 50px;
`;

const HotWrap = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

const Con = styled.div`
  height: 300px;
  background-color: #f6f9fc;
  border-radius: 12px;
  &:hover {
    transform: scale(1.03);
    transition-duration: 0.4s;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 65%;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 12px 12px 6px 6px;
  }
`;

const ConText = styled.div`
  padding: 10px;
  h3 {
    font-size: 17px;
    font-weight: 600;
  }
  p {
    font-size: 15px;
    margin-top: 10px;
    opacity: 0.8;
  }
  span {
    display: block;
    font-size: 15px;
    margin-top: 5px;
    line-height: 19px;
    opacity: 0.7;
  }
`;

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
            <BanWrap $bgUrl={`http://${hotData[0].CON_IMGFILENAME}`}>
              <Text>
                <h5>SPOON COLLECTION</h5>
                <Title>Hot Places</Title>
                <p>
                  The restaurants and cafes that are talk of the town. Look out
                  for more such popular places!
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
                      <img
                        src={`https://${data.CON_IMGFILENAME}`}
                        alt={data.CON_TITLE}
                      />
                    </Img>
                    <ConText>
                      <h3>{data.CON_TITLE}</h3>
                      <p>{"# " + data.AREA_NAME}</p>
                      <span>{data.CON_DESC1}</span>
                    </ConText>
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
