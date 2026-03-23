import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TopHeader from "../components/header/TopHearder";

const Layout = () => {
  return (
    <>
      <Header />
        <Outlet />
     <Footer/>
    </>
  );
};

export default Layout;
