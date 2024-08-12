import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { useScrollTop } from "../../lib/useScrollTop";
import { useParams } from "react-router-dom";

export const Detail = () => {
  useScrollTop();

  const [resData, setResData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(resData);

  return <div>Detail</div>;
};
