import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Detail } from "./pages/detail/Detail";
import { PageNotFound } from "./pages/PageNotFound";
import { Search } from "./pages/search/Search";
import { ScrollTopBtn } from "./components/ScrollTopBtn";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <ScrollTopBtn />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
