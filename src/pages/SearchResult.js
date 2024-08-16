import { useEffect, useState } from "react";
import { useScrollTop } from "../lib/useScrollTop";
import { cafe, restaurant } from "../api";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Header } from "../components/Header";
import styled from "styled-components";
import { IMG_BASE_URL } from "../constant/imgUrl";
import { spacing } from "../GlobalStyled";

const ResContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-top: 50px;
  }
  @media screen and (max-width: 510px) {
    h2 {
      font-size: 25px;
      margin-top: 40px;
    }
  }
`;

const Wrap = styled.div`
  margin-top: 60px;
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  @media screen and (max-width: 510px) {
    padding: ${spacing.moside};
    grid-template-columns: repeat(1, 1fr);
    row-gap: 50px;
    margin-top: 40px;
  }
`;

const Con = styled.div`
  padding: 10px;
  width: 100%;
  height: 430px;
  border-radius: 12px;
  &:hover {
    border: 1px solid #66666620;
    box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 10px;
  }
  img {
    height: 75%;
    object-fit: cover;
    border-radius: 12px;
  }
  @media screen and (max-width: 510px) {
    padding: 0;
    height: 350px;
    &:hover {
      border: none;
      box-shadow: none;
    }
    img {
      height: 70%;
    }
  }
`;

const Text = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
  }
  p {
    font-size: 15px;
    margin-top: 5px;
    line-height: 20px;
    opacity: 0.8;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.6;
  }
`;

export const SearchResult = () => {
  useScrollTop();

  const [resData, setResData] = useState();
  const [cafData, setCafData] = useState();
  const { id: keyword } = useParams();
  const [keyData, setKeyData] = useState();
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
        const {
          response: {
            body: {
              items: { item: cafResult },
            },
          },
        } = await cafe();
        setResData(resResult);
        setCafData(cafResult);

        const keyResult = resResult.filter(
          (res) => res.CON_KEYWORDS.includes(keyword) === true
        );
        const cafKeyResult = cafResult.filter(
          (caf) => caf.CON_KEYWORDS.includes(keyword) === true
        );
        const keyAllResult = keyResult.concat(cafKeyResult);

        setKeyData(keyAllResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  //   console.log(resData);
  // console.log(cafData);
  console.log(keyData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />

          {/* ---------------------------------------------------------------------------- */}

          <ResContainer>
            <h2>"{keyword}" 검색결과 입니다 😊</h2>
            <Wrap>
              {keyData.map((res) => (
                <Con>
                  {res.CODE_UID === 1004 ? (
                    <Link key={res.CON_UID} to={`/cafedetail/${res.CON_UID}`}>
                      <img
                        src={IMG_BASE_URL + res.CON_IMGFILENAME}
                        alt={res.CON_TITLE}
                      />
                      <Text>
                        <h4>{res.CON_TITLE}</h4>
                        <p>카페</p>
                        <p># {res.CON_KEYWORDS.slice(0, 25)} ...</p>
                        <span>{res.CON_ADDRESS}</span>
                      </Text>
                    </Link>
                  ) : (
                    <Link key={res.CON_UID} to={`/detail/${res.CON_UID}`}>
                      <img
                        src={IMG_BASE_URL + res.CON_IMGFILENAME}
                        alt={res.CON_TITLE}
                      />
                      <Text>
                        <h4>{res.CON_TITLE}</h4>
                        <p>레스토랑</p>
                        <p># {res.CON_KEYWORDS.slice(0, 25)} ...</p>
                        <span>{res.CON_ADDRESS}</span>
                      </Text>
                    </Link>
                  )}
                </Con>
              ))}
            </Wrap>
          </ResContainer>
        </>
      )}
    </>
  );
};
