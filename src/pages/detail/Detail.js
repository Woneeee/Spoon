import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { useScrollTop } from "../../lib/useScrollTop";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";

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

        const placeResult = resResult.filter((res) => res.CON_UID === 414);
        setPlaceData(placeResult);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(resData);
  console.log(placeData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
        </>
      )}
    </>
  );
};
