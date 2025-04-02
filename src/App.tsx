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
