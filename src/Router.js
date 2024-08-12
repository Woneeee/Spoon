import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Footer } from "./components/Footer";
import { Detail } from "./pages/detail/Detail";
import { PageNotFound } from "./pages/PageNotFound";
import { Search } from "./pages/search/Search";
import { ScrollTopBtn } from "./components/ScrollTopBtn";
import { Dining } from "./pages/dining&cafe/Dining";
import { Cafe } from "./pages/dining&cafe/Cafe";
import { Hot } from "./pages/hot/Hot";
import { CafeDetail } from "./pages/detail/CafeDetail";
import { HotDetail } from "./pages/detail/HotDetail";

const Router = () => {
  return (
    <HashRouter>
      <ScrollTopBtn />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.dining} element={<Dining />} />
        <Route path={routes.cafe} element={<Cafe />} />
        <Route path={routes.hot} element={<Hot />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.cafedetail} element={<CafeDetail />} />
        <Route path={routes.hotdetail} element={<HotDetail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
