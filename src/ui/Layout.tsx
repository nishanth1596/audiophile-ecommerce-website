import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function Layout() {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      <Header />
      {isCheckoutPage ? <Outlet /> : <Main />}
      <Footer />
    </>
  );
}

export default Layout;
