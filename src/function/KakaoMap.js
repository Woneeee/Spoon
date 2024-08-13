import { useEffect } from "react";

const { kakao } = window;

export const KakaoMap = ({ data }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(data?.CON_LATITUDE, data?.CON_LONGITUDE),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(
      data.CON_LATITUDE,
      data.CON_LONGITUDE
    ); // 마커가 표시될 위치
    const marker = new kakao.maps.Marker({
      // 마커를 생성한다
      position: markerPosition,
    });

    marker.setMap(map); // 마커가 지도 위에 표시되도록 설정한다
  }, []);

  return (
    <div
      id="map"
      style={{
        marginTop: "10px",
        width: "100%",
        height: "230px",
      }}
    ></div>
  );
};
