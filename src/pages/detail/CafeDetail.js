import { useEffect, useState } from "react";
import { cafe } from "../../api";
import { useScrollTop } from "../../lib/useScrollTop";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_BASE_URL, IMG_WWW_URL } from "../../constant/imgUrl";
import "swiper/css";
import "./css/swiperStyle.css";
import {
  Section,
  Container,
  StoWrap,
  StoInfo,
  LocSort,
  LocIcon,
  SpoonIcon,
  Details,
  StoIntro,
  StoMenu,
  Button,
  MoreDetail,
  Reviews,
  Con,
  ErrorMessage,
  ReviewCon,
  StoDirec,
  Call,
  Direction,
  HomePage,
  JustForDisplay,
  MoreBg,
  MoreCon,
  Close,
} from "../detail/components/DetailStyle";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { KakaoMap } from "../../function/KakaoMap";
import { IoCloseCircleOutline } from "react-icons/io5";

export const CafeDetail = () => {
  useScrollTop();

  const [cafData, setCafData] = useState();
  const { id: cafeId } = useParams();
  const [placeData, setPlaceData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {
          response: {
            body: {
              items: { item: cafResult },
            },
          },
        } = await cafe();
        setCafData(cafResult);

        const placeResult = cafResult.filter(
          (res) => res.CON_UID === Number(cafeId)
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
  const ogDetailTxt = placeData?.CON_SUMMARY.slice(menuIdx);
  const cleanDetailTXT = ogDetailTxt?.replace(
    /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
    " •"
  );
  const [isVisable, setIsVisable] = useState(false);

  const moreHandler = () => {
    setIsVisable(true);
  };

  const closeHandler = () => {
    setIsVisable(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const reviewHandler = ({ writeResult }) => {
    setWriteData(writeResult);
  };

  // console.log(cafData);
  console.log(placeData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />

          {/* -------------------------------------------------------------------------------------------------- */}

          <Swiper slidesPerView={2.5} className="swiper">
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

          {/* ---------------------------------------------------------------------------------------------------- */}

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

            <JustForDisplay $canLook={isVisable ? "display" : "none"}>
              <MoreBg>
                <Close onClick={closeHandler}>
                  <IoCloseCircleOutline />
                </Close>

                <MoreCon>
                  <h2>Details</h2>
                  <p>{cleanDetailTXT}</p>
                </MoreCon>
              </MoreBg>
            </JustForDisplay>
          </Section>
        </>
      )}
    </>
  );
};
