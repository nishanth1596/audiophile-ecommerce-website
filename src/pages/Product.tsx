import { useParams } from "react-router-dom";
import ProductCategoryPage from "../ui/ProductCategoryPage";

function Product() {
  const { category } = useParams();

  return <ProductCategoryPage name={category} />;
}

export default Product;
