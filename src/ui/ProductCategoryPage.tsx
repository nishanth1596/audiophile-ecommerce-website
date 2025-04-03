import { useQuery } from "@tanstack/react-query";
import { fetchProductData } from "../services/apiProductdata";
import LoadingSpinner from "./LoadingSpinner";
import ProductCategoryPageItem from "./ProductCategoryPageItem";

export type ProductProps = {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
};

type ProductCategoryPageProps = {
  name: string;
};

function ProductCategoryPage({ name }: ProductCategoryPageProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["ProductData"],
    queryFn: fetchProductData,
  });

  if (isLoading) return <LoadingSpinner />;

  // Filtering products from the product data
  const productData = data.filter(
    (item: ProductProps) => item.category === name,
  );

  // Sorting products based on their price in the descending order
  const products = [...productData].sort((a, b) => b.price - a.price);

  return (
    <section className="text-center">
      <h4 className="bg-PureBlack text-White py-8">{name}</h4>

      {products.map((product: ProductProps) => (
        <ProductCategoryPageItem
          name={product.name}
          key={product.id}
          productImage={product.image}
          description={product.description}
          newProduct={product.new}
        />
      ))}
    </section>
  );
}

export default ProductCategoryPage;
