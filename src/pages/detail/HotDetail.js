import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { hot } from "../../api";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IMG_WWW_URL } from "../../constant/imgUrl";
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
  Reviews,
  Con,
  ErrorMessage,
  ReviewCon,
  StoDirec,
  Call,
  Direction,
  HomePage,
} from "../detail/components/DetailStyle";
import { FaLocationDot } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { KakaoMap } from "../../function/KakaoMap";

export const HotDetail = () => {
  useScrollTop();

  const [hotData, setHotData] = useState();
  const { id: placeId } = useParams();
  const [placeData, setPlaceData] = useState();
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

        const placeResult = hotResult.filter(
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const reviewHandler = ({ writeResult }) => {
    setWriteData(writeResult);
  };

  console.log(hotData);
  console.log(placeData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />

          {/* ------------------------------------------------------------------------------------ */}

          <Swiper
            slidesPerView={2.5}
            className="swiper"
            modules={[Navigation]}
            navigation
            breakpoints={{
              1100: { slidesPerView: 2.5 },
              300: { slidesPerView: 1.2 },
            }}
          >
            <SwiperSlide className="slide">
              <img
                src={`https://${placeData.CON_IMGFILENAME}`}
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

          {/* ------------------------------------------------------------------------------ */}

          <Section>
            <Container>
              <StoWrap>
                <StoInfo>
                  <p># {placeData.AREA_NAME}</p>
                  <h2>{placeData.CON_TITLE}</h2>
                  <LocSort>
                    <h5>
                      <LocIcon>
                        <FaLocationDot />
                      </LocIcon>
                      {placeData.CON_DESC1}
                    </h5>
                    <h4>
                      <SpoonIcon>
                        <ImSpoonKnife />
                      </SpoonIcon>
                      {placeData.AREA_NAME}
                    </h4>
                  </LocSort>
                </StoInfo>

                <Details>
                  <StoIntro>
                    <h2>Introduce</h2>
                    <p>{totallyCleanText}</p>
                  </StoIntro>

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
                  <p>{placeData.CON_DESC2}</p>
                </Call>

                <Direction>
                  <h2>Direction</h2>

                  <KakaoMap data={placeData} />
                  <p>{placeData.CON_DESC1}</p>
                </Direction>

                <HomePage>
                  <h2>HomePage</h2>

                  <a href={placeData.LINKURL}>{placeData.LINKURL}</a>
                </HomePage>
              </StoDirec>
            </Container>
          </Section>
        </>
      )}
    </>
  );
};
