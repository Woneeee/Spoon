import { useEffect, useState } from "react";
import { restaurant } from "../../api";
import { Title } from "../../components/Title";

export const Home = () => {
  const [resData, setResData] = useState();

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Title titleName="Home" />
      Home
    </div>
  );
};
