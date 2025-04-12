import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Checkout from "./pages/Checkout";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import ProductCatalog from "./pages/ProductCatalog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/:category" element={<Product />} />
        <Route path="/:category/:id/:slug" element={<ProductCatalog />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
