import { Helmet } from "react-helmet-async";

export const Title = ({ titleName }) => {
  return (
    <Helmet>
      <title>Spoon | {titleName}</title>
    </Helmet>
  );
};
