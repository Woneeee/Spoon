import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
