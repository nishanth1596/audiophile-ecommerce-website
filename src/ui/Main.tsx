import { Outlet } from "react-router-dom";
import AboutUsSection from "../feature/about/AboutUsSection";

function Main() {
  return (
    <main className="">
      <Outlet />
      <AboutUsSection />
    </main>
  );
}

export default Main;
