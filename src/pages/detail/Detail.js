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
import {
  firtImgEIdx,
  firtImgSIdx,
  secImgEIdx,
  secImgSIdx,
} from "../../constant/imgIdx";

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

  console.log(resData);
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

          {/* ----------------------------------------------------------------------------------------------------- */}
        </>
      )}
    </>
  );
};
