import { useForm } from "react-hook-form";
import styled from "styled-components";
import { point } from "../GlobalStyled";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes";

const Container = styled.div`
  width: 100%;
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
`;

const Logo = styled.div`
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -2px;
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
`;

const LocIcon = styled.div`
  margin-left: 10px;
  margin-right: 15px;
  font-size: 20px;
`;

const SearchIcon = styled.div`
  margin-left: 18px;
  margin-right: 15px;
  font-size: 20px;
`;

const User = styled.ul`
  display: flex;
  li {
    font-size: 18px;
    cursor: pointer;
    &:nth-child(2) {
      margin-left: 30px;
    }
  }
`;

export const Header = () => {
  const { register, handleSubmit } = useForm();

  const navi = useNavigate();
  const searchHandler = ({ sort }) => {
    if (sort === "한식") {
      navi("/search/1001");
    } else if (sort === "양식") {
      navi("/search/1000");
    } else if (sort === "일식") {
      navi("/search/1002");
    } else if (sort === "중식") {
      navi("/search/1003");
    }
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
            {...register("sort", {
              required: false,
            })}
            className="sort"
            type="text"
            placeholder="한식, 양식, 일식, 중식..."
          />

          <button>Search</button>
        </Form>

        <User>
          <li>Log in</li>
          <li>Sign up</li>
        </User>
      </Wrap>
    </Container>
  );
};
