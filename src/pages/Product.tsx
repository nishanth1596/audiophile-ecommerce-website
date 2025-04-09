import { useParams } from "react-router-dom";
import ProductCategoryPage from "../ui/ProductCategoryPage";
import GallerySection from "../ui/GallerySection";

function Product() {
  const { category } = useParams();

  return (
    <>
      <ProductCategoryPage name={category} />
      <GallerySection mobile={false} />
    </>
  );
}

export default Product;
