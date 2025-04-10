import { Outlet } from "react-router-dom";
import AboutUsSection from "../feature/about/AboutUsSection";
import GallerySection from "./GallerySection";

function Main() {
  return (
    <>
      <Outlet />
      <GallerySection mobile={true} />
      <AboutUsSection />
    </>
  );
}

export default Main;
