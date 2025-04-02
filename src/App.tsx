import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;

// https://67ecd13789990cabc023849b--elegant-moxie-e8615c.netlify.app/data.json

//   Home
//   Headphones
//   Speakers
//   Earphones

//   Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
//   and sound specialists who are devoted to helping you get the most out of personal audio. Come and
//   visit our demo facility - we’re open 7 days a week.

//   Copyright 2021. All Rights Reserved
