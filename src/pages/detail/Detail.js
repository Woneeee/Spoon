import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { useScrollTop } from "../../lib/useScrollTop";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import styled from "styled-components";
import { IMG_BASE_URL, IMG_WWW_URL } from "../../constant/imgUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./css/swiperStyle.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import { KakaoMap } from "../../function/KakaoMap";

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: pink; */
`;

const Container = styled.div`
  position: relative;
  max-width: 1100px;
  width: 100%;
  /* background-color: gray; */
  display: grid;
  grid-template-columns: 650px 1fr;
  column-gap: 50px;
`;

const StoWrap = styled.div`
  height: 1200px;
  /* background-color: beige; */
`;

const StoInfo = styled.div`
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

const LocSort = styled.div`
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

const LocIcon = styled.div`
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

const SpoonIcon = styled.div`
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

const Details = styled.div``;

const StoIntro = styled.div`
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

const StoMenu = styled.div`
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

const Button = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

const MoreDetail = styled.button`
  all: unset;
  width: 160px;
  height: 100%;
  background-color: salmon;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Reviews = styled.form`
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

const Con = styled.div`
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

const ErrorMessage = styled.div`
  font-size: 15px;
  margin-top: 10px;
  color: gold;
`;

const ReviewCon = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #55555520;
  border-bottom: 1px solid #55555520;
  margin-top: 10px;
  padding: 30px 0;
`;

const StoDirec = styled.div`
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

const Call = styled.div`
  h2 {
    font-size: 20px;
  }
  p {
    margin-top: 10px;
    color: crimson;
  }
`;

const Direction = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 20px;
  }
  p {
    margin-top: 10px;
  }
`;

const HomePage = styled.div`
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

export const Detail = () => {
  useScrollTop();

  const [resData, setResData] = useState();
  const { id: placeId } = useParams();
  const [placeData, setPlaceData] = useState();
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
        setResData(resResult);

        const placeResult = resResult.filter(
          (res) => res.CON_UID === Number(placeId)
        );
        setPlaceData(placeResult[0]);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const firtImgSIdx = placeData?.CON_CONTENT.indexOf("/upload");
  const firtImgEIdx = placeData?.CON_CONTENT.indexOf("jpg");
  const secImgSIdx = placeData?.CON_CONTENT.lastIndexOf("/upload");
  const secImgEIdx = placeData?.CON_CONTENT.lastIndexOf("jpg");
  const menuIdx = placeData?.CON_SUMMARY.indexOf("<br />");
  const introIdx = placeData?.CON_CONTENT.indexOf("<ul");
  const [writeData, setWriteData] = useState();
  const noTagText = placeData?.CON_CONTENT.replace(
    /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
    ""
  );
  const cleanText_1 = noTagText?.replace(
    /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
    ""
  );
  const totallyCleanText = cleanText_1?.replace(/[a-zA-Z0-9]/g, "");

  const moreHandler = () => {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const reviewHandler = ({ writeResult }) => {
    setWriteData(writeResult);
  };

  // console.log(resData);
  console.log(placeData);
  // console.log(secImgSIdx);
  // console.log(secImgEIdx);
  // console.log(placeData?.CON_CONTENT.slice(secImgSIdx, secImgEIdx));

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />

          {/* -------------------------------------------------------------------------------------------------- */}

          <Swiper
            slidesPerView={2.5}
            className="swiper"
            modules={[Navigation]}
            navigation
          >
            <SwiperSlide className="slide">
              <img
                src={IMG_BASE_URL + placeData.CON_IMGFILENAME}
                alt={placeData.CON_TITLE}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img
                src={`
                  ${IMG_WWW_URL}${placeData.CON_CONTENT.slice(
                  firtImgSIdx,
                  firtImgEIdx
                )}jpg`}
                alt={placeData.CON_TITLE}
              />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img
                src={`${IMG_WWW_URL}${placeData.CON_CONTENT.slice(
                  secImgSIdx,
                  secImgEIdx
                )}jpg`}
                alt={placeData.CON_TITLE}
              />
            </SwiperSlide>
          </Swiper>

          {/* ----------------------------------------------------------------------------------------------------- */}

          <Section>
            <Container>
              <StoWrap>
                <StoInfo>
                  <p># {placeData.CON_KEYWORDS}</p>
                  <h2>{placeData.CON_TITLE}</h2>
                  <LocSort>
                    <h5>
                      <LocIcon>
                        <FaLocationDot />
                      </LocIcon>
                      {placeData.CON_ADDRESS}
                    </h5>
                    <h4>
                      <SpoonIcon>
                        <ImSpoonKnife />
                      </SpoonIcon>
                      {placeData.CODE_NAME}
                    </h4>
                  </LocSort>
                </StoInfo>

                <Details>
                  <StoIntro>
                    <h2>Introduce</h2>
                    <p>{totallyCleanText}</p>
                  </StoIntro>

                  <StoMenu>
                    <h2>Restaurant menu</h2>
                    <p>{placeData.CON_SUMMARY.slice(0, menuIdx)}</p>
                  </StoMenu>

                  <Button>
                    <MoreDetail onClick={moreHandler}>
                      View more details
                    </MoreDetail>
                  </Button>

                  <Reviews onSubmit={handleSubmit(reviewHandler)}>
                    <h2>Reviews</h2>

                    <Con>
                      <input
                        {...register("writeResult", {
                          required: "글자를 입력해주세요 😢",
                        })}
                        type="text"
                        placeholder="후기를 작성해주세요... 😊"
                      />
                      <button>입력</button>
                    </Con>
                    <ErrorMessage>{errors?.writeResult?.message}</ErrorMessage>

                    <p>What diners said about "{placeData.CON_TITLE}": </p>
                    <ReviewCon>{writeData}</ReviewCon>
                  </Reviews>
                </Details>
              </StoWrap>

              <StoDirec>
                <Call>
                  <h2>Call</h2>
                  <p>{placeData.CON_PHONE}</p>
                </Call>

                <Direction>
                  <h2>Direction</h2>

                  <KakaoMap data={placeData} />
                  <p>{placeData.CON_ADDRESS}</p>
                </Direction>

                <HomePage>
                  <h2>HomePage</h2>

                  <a href={placeData.CON_HOMEPAGE}>{placeData.CON_HOMEPAGE}</a>
                </HomePage>
              </StoDirec>
            </Container>
          </Section>
        </>
      )}
    </>
  );
};
