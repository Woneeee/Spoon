import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Detail } from "./pages/detail/Detail";
import { PageNotFound } from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
