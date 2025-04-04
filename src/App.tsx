import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Checkout from "./pages/Checkout";
import Homepage from "./pages/Homepage";
// import Headphones from "./pages/Headphones";
// import Speakers from "./pages/Speakers";
// import Earphones from "./pages/Earphones";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/:category" element={<Product />} />

        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;

// Homepage - <h1 = mt-4 text-4xl leading-10 font-bold tracking-[1.29px] uppercase

//  GalleryCategoryCard - <h2 ="text-PureBlack text-[0.94rem] leading-5 font-bold tracking-[1.07px] uppercase">

// product showcase    <h3 className="text-White mt-8 px-6 text-4xl leading-10 font-bold tracking-[1.29px] uppercase">

// --- <p className="text-White mt-6 mb-6 px-6 text-[0.94rem] leading-[1.56rem] font-medium tracking-[0px] opacity-75"></p>

// product-showcase - article - <h4 className="mb-8 text-[1.75rem] leading-[2.375rem] font-bold tracking-[2px] uppercase"

// homepage-  <p className="mt-6 text-[0.94rem] leading-[1.56rem] font-medium opacity-75">
// Experience natural, lifelike audio and exceptional build quality made
// for the passionate music enthusiast.
// </p>
