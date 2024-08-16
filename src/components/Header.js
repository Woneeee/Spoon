import { useForm } from "react-hook-form";
import styled from "styled-components";
import { point, spacing } from "../GlobalStyled";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { useEffect, useState } from "react";
import { cafe, restaurant } from "../api";

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #66666620;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const Wrap = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 510px) {
    padding: ${spacing.moside};
    display: block;
  }
`;

const Logo = styled.div`
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -2px;
  @media screen and (max-width: 510px) {
    font-size: 30px;
    margin-bottom: 25px;
    width: 121px;
  }
`;

const Form = styled.form`
  width: 65%;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #66666630;
  box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 8px;
  .loc {
    all: unset;
    width: 25%;
    border-right: 1px solid #66666630;
    font-weight: 500; //400 이 기본
    font-size: 15px;
  }
  .sort {
    all: unset;
    width: 60%;
    &::placeholder {
      font-style: italic;
      font-size: 15px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
  button {
    all: unset;
    width: 15%;
    height: 36px;
    border-radius: 5px;
    text-align: center;
    background-color: ${point.color};
    &:hover {
      background-color: #9cc05c;
      transition-duration: 0.3s;
    }
  }
  @media screen and (max-width: 510px) {
    width: 100%;
    height: 53px;
    .loc {
      width: 20%;
      font-size: 14px;
    }
    .sort {
      width: 60%;
      &::placeholder {
        font-size: 14px;
      }
    }
    button {
      font-size: 14px;
    }
  }
`;

const LocIcon = styled.div`
  margin-left: 10px;
  margin-right: 15px;
  font-size: 20px;
  @media screen and (max-width: 510px) {
    margin-left: 5px;
    margin-right: 13px;
  }
`;

const SearchIcon = styled.div`
  margin-left: 18px;
  margin-right: 15px;
  font-size: 20px;
  @media screen and (max-width: 510px) {
    margin-left: 13px;
    margin-right: 13px;
  }
`;

export const Header = () => {
  const { register, handleSubmit } = useForm();

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

  const navi = useNavigate();
  const { pathname } = useLocation();
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

    keyAllResult.length !== 0
      ? navi(`/searchresult/${keyword}`)
      : navi({ pathname });
  };

  return (
    <Container>
      <Wrap>
        <Link to={routes.home}>
          <Logo>
            Spoon&nbsp;
            <TbBowlSpoonFilled
              style={{
                backgroundColor: point.color,
                borderRadius: "10px",
                color: point.deepcolor,
              }}
            />
          </Logo>
        </Link>

        <Form onSubmit={handleSubmit(searchHandler)}>
          <LocIcon>
            <MdLocationOn />
          </LocIcon>
          <input className="loc" type="text" value="경주" readOnly></input>

          <SearchIcon>
            <AiOutlineSearch />
          </SearchIcon>
          <input
            {...register("keyword", {
              required: false,
            })}
            className="sort"
            type="text"
            placeholder="키워드를 입력해주세요..."
          />

          <button>입력</button>
        </Form>
      </Wrap>
    </Container>
  );
};
