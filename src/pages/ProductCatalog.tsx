import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductData } from "../services/apiProductdata";
import LoadingSpinner from "../ui/LoadingSpinner";
import { ProductProps } from "../ui/ProductCategoryPage";
import RelatedProductsItem from "../ui/RelatedProductsItem";
import GoBackButton from "../ui/GoBackButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";
import IncreaseDecreaseQuantityBtn from "../ui/IncreaseDecreaseQuantityBtn";

function ProductCatalog() {
  const [quantity, setQuantity] = useState<number>(0);
  const { id } = useParams();

  const dispatch = useDispatch();

  const { data, isLoading } = useQuery<ProductProps[]>({
    queryKey: ["ProductData"],
    queryFn: fetchProductData,
  });

  const selectedProduct = data?.find((item) => item.id === parseInt(id ?? ""));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const updatedMobileImgPath = selectedProduct?.categoryImage.mobile.replace(
    "./assets/",
    "/assets/",
  );

  function handleAddToCart() {
    const newItems = {
      id: selectedProduct?.id,
      unitPrice: selectedProduct?.price,
      image: selectedProduct?.image,
      title: selectedProduct?.name,
      quantity: quantity,
    };

    dispatch(addToCart(newItems));
    setQuantity(0);
  }

  function handleDecreaseQuantity() {
    setQuantity((value) => (value >= 1 ? value - 1 : value));
  }

  function handleIncreaseQuantity() {
    setQuantity((value) => value + 1);
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="mx-6">
      <GoBackButton />

      <picture>
        <source srcSet={updatedMobileImgPath} media="(max-width:767px)" />

        <img src={updatedMobileImgPath} alt="" className="mt-6 rounded-lg" />
      </picture>

      {selectedProduct?.new && (
        <p className="Overline text-PrimaryColor mt-8">new product</p>
      )}

      <h4 className="mt-6 tracking-[1px]">{selectedProduct?.name}</h4>

      <p className="mt-6 opacity-50">{selectedProduct?.description}</p>

      <p className="mt-6 text-lg leading-[1.56rem] font-bold tracking-[1.29px] opacity-100">
        ${selectedProduct?.price}
      </p>

      <div className="mt-[31px] flex w-full items-center gap-4">
        <IncreaseDecreaseQuantityBtn
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          quantity={quantity}
          isOnCart={false}
        />

        <button
          className="bg-PrimaryColor text-White w-full py-[15px] pr-[30.5px] pl-[34.5px] text-[13px] leading-[18px] font-bold tracking-[1px] uppercase"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>

      <article className="mt-[5.5rem]">
        <h5>features</h5>

        {selectedProduct?.features.split("\n\n").map((para, i) => (
          <p className="mt-6 opacity-50" key={i}>
            {para}
          </p>
        ))}

        <h5 className="mt-[5.5rem]">In the box</h5>

        <ul className="mt-6 space-y-2">
          {selectedProduct?.includes.map((items, i) => (
            <li
              key={i}
              className="text-PureBlack space-x-6 text-[0.94rem] leading-[1.56rem] font-medium tracking-normal"
            >
              <span className="text-PrimaryColor font-bold">
                {items.quantity}x
              </span>
              <span className="capitalize opacity-50">{items.item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-[5.5rem] flex flex-col gap-5">
          {Object.values(selectedProduct?.gallery || {}).map((image, i) => {
            const mobile = image.mobile.replace("./assets/", "/assets/");
            const tablet = image.tablet.replace("./assets/", "/assets/");
            const desktop = image.desktop.replace("./assets/", "/assets/");

            return (
              <picture key={i}>
                <source srcSet={mobile} media="(max-width:767px)" />
                <source
                  srcSet={tablet}
                  media="(min-width:768px and max-width:1023px)"
                />
                <source srcSet={desktop} media="(min-width:1024px)" />
                <img
                  src={mobile}
                  alt={`Gallery image ${i + 1}`}
                  className="rounded-lg"
                />
              </picture>
            );
          })}
        </div>
      </article>

      <article className="mt-[7.5rem] text-center">
        <h5>You may also like</h5>
        <div className="space-y-14">
          {selectedProduct?.others.map((product) => {
            const relatedProduct = data?.find((p) => p.slug === product.slug);

            return (
              <RelatedProductsItem
                key={product.slug}
                relatedImage={product.image}
                title={product.name}
                navigateTo={`/${relatedProduct?.category}/${relatedProduct?.id}/${product.slug}`}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default ProductCatalog;
