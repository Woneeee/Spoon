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
        </>
      )}
    </>
  );
};
