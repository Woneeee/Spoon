import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  /* background-color: pink; */
`;

export const Container = styled.div`
  position: relative;
  max-width: 1100px;
  width: 100%;
  /* background-color: gray; */
  display: grid;
  grid-template-columns: 650px 1fr;
  column-gap: 50px;
`;

export const StoWrap = styled.div`
  height: 1200px;
  /* background-color: beige; */
`;

export const StoInfo = styled.div`
  padding: 30px 0 40px 0;
  border-bottom: 2px solid #55555520;
  p {
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
  }
  h2 {
    font-size: 33px;
    font-weight: 500;
    margin-top: 15px;
    letter-spacing: -1px;
  }
`;

export const LocSort = styled.div`
  margin-top: 35px;
  h5 {
    display: flex;
    align-items: center;
    text-decoration: underline;
    font-weight: 500;
    letter-spacing: -1px;
  }
  h4 {
    margin-top: 10px;
    display: flex;
    align-items: center;
    font-weight: 300;
    letter-spacing: -1px;
  }
`;

export const LocIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-right: 10px;
  svg {
    font-size: 15px;
  }
`;

export const SpoonIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-right: 10px;
  svg {
    font-size: 15px;
  }
`;

export const Details = styled.div``;

export const StoIntro = styled.div`
  margin-top: 40px;

  h2 {
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -1px;
  }
  p {
    margin-top: 20px;
    width: 600px;
    opacity: 0.8;
    line-height: 23px;
  }
`;

export const StoMenu = styled.div`
  margin-top: 60px;
  h2 {
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -1px;
  }
  p {
    margin-top: 20px;
    width: 600px;
    opacity: 0.8;
    line-height: 23px;
  }
`;

export const Button = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

export const MoreDetail = styled.button`
  all: unset;
  width: 180px;
  height: 100%;
  background-color: salmon;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Reviews = styled.form`
  margin-top: 80px;
  h2 {
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -1px;
  }
  p {
    margin-top: 20px;
    font-weight: 500;
  }
`;

export const Con = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 30px;
  /* background-color: pink; */
  display: flex;
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 100%;
    border: 1px solid #555555;
    border-radius: 10px;
    padding: 2px 10px;
    &::placeholder {
      font-size: 15px;
    }
  }
  button {
    all: unset;
    height: 100%;
    font-size: 15px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 15px;
  margin-top: 10px;
  color: gold;
`;

export const ReviewCon = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #55555520;
  border-bottom: 1px solid #55555520;
  margin-top: 10px;
  padding: 30px 0;
`;

export const StoDirec = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  /* background-color: aliceblue; */
  height: 500px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #55555510;
  box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 8px;
`;

export const Call = styled.div`
  h2 {
    font-size: 20px;
  }
  p {
    margin-top: 10px;
    color: crimson;
    font-size: 17px;
  }
`;

export const Direction = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 20px;
  }
  p {
    margin-top: 10px;
    font-size: 15px;
    letter-spacing: -1px;
  }
`;

export const HomePage = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  a {
    display: block;
    text-decoration: underline;
  }
`;

export const JustForDisplay = styled.div`
  display: ${(props) => props.$canLook};
`;

export const MoreBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000090;
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
`;

export const MoreCon = styled.div`
  max-width: 400px;
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
  h2 {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -1px;
  }
  p {
    margin-top: 20px;
    font-size: 17px;
    opacity: 0.8;
    letter-spacing: 0.2px;
    line-height: 25px;
  }
`;

export const Close = styled.div`
  font-size: 70px;
  margin-bottom: 5%;
  cursor: pointer;
  margin: 90px auto;
`;
