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
import toast, { Toaster } from "react-hot-toast";
import GallerySection from "../ui/GallerySection";

function ProductCatalog() {
  const [quantity, setQuantity] = useState<number>(1);
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

  const updatedMobileImgPath = selectedProduct?.categoryImage.mobile
    .replace("./assets/", "/assets/")
    .replace("image-category-page-preview.jpg", "image-product.jpg");
  const updatedTabletImgPath = selectedProduct?.categoryImage.tablet
    .replace("./assets/", "/assets/")
    .replace("image-category-page-preview.jpg", "image-product.jpg");
  const updatedDesktopImgPath = selectedProduct?.categoryImage.desktop
    .replace("./assets/", "/assets/")
    .replace("image-category-page-preview.jpg", "image-product.jpg");

  function handleAddToCart() {
    if (quantity === 0) {
      return;
    } else {
      const newItems = {
        id: selectedProduct?.id,
        unitPrice: selectedProduct?.price,
        image: selectedProduct?.image,
        title: selectedProduct?.name,
        quantity: quantity,
        slug: selectedProduct?.slug,
      };

      dispatch(addToCart(newItems));
      toast.success(
        `${quantity} Item${quantity > 1 ? "s" : ""} added to the cart!`,
      );
      setQuantity(0);
    }
  }

  function handleDecreaseQuantity() {
    setQuantity((value) => (value >= 1 ? value - 1 : value));
  }

  function handleIncreaseQuantity() {
    setQuantity((value) => value + 1);
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <section className="mx-6 sm:mx-10">
        <GoBackButton />

        <div className="mt-6 sm:grid sm:grid-cols-2 sm:gap-x-[69px]">
          <picture>
            <source srcSet={updatedMobileImgPath} media="(max-width:767px)" />
            <source
              srcSet={updatedTabletImgPath}
              media="(min-width:767px) and (max-width:1023px)"
            />
            <source srcSet={updatedDesktopImgPath} media="(min-width:1024px)" />

            <img src={updatedMobileImgPath} alt="" className="rounded-lg" />
          </picture>

          {/* this div is for grid separation only */}
          <div className="sm:flex sm:flex-col sm:justify-center">
            {selectedProduct?.new && (
              <p className="Overline text-PrimaryColor mt-8 sm:mt-0">
                new product
              </p>
            )}
            <h4 className="mt-6 tracking-[1px] sm:mt-4 sm:leading-[2rem] sm:tracking-[1px]">
              {selectedProduct?.name}
            </h4>
            <p className="mt-6 opacity-50 sm:mt-8">
              {selectedProduct?.description}
            </p>
            <p className="mt-6 text-lg leading-[1.56rem] font-bold tracking-[1.29px] opacity-100 sm:mt-8">
              $ {selectedProduct?.price.toLocaleString()}
            </p>{" "}
            <div className="mt-[31px] flex items-center gap-4 sm:max-w-md">
              <IncreaseDecreaseQuantityBtn
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                quantity={quantity}
                isOnCart={false}
              />

              <button
                className="bg-PrimaryColor text-White w-full py-[15px] pr-[30.5px] pl-[34.5px] text-[13px] leading-[18px] font-bold tracking-[1px] uppercase sm:w-[200px]"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              <Toaster />
            </div>
          </div>
        </div>

        <article className="mt-[5.5rem] sm:mt-[7.5rem]">
          <h5 className="sm:text-[2rem] sm:leading-9 sm:tracking-[1.14px]">
            features
          </h5>

          {selectedProduct?.features.split("\n\n").map((para, i) => (
            <p className="mt-6 opacity-50 sm:mt-8" key={i}>
              {para}
            </p>
          ))}

          <div className="mt-[5.5rem] sm:mt-[7.5rem] sm:flex sm:max-w-[549px] sm:items-start sm:justify-between">
            <h5 className="sm:text-[2rem] sm:leading-9 sm:tracking-[1.14px]">
              In the box
            </h5>

            <ul className="mt-6 space-y-2 sm:mt-0">
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
          </div>

          <div className="mt-[5.5rem] flex flex-col gap-5 sm:grid sm:grid-cols-2">
            <div className="flex flex-col gap-5">
              {Object.values(selectedProduct?.gallery || {})
                .slice(0, 2)
                .map((image, i) => {
                  const mobile = image.mobile.replace("./assets/", "/assets/");
                  const tablet = image.tablet.replace("./assets/", "/assets/");
                  const desktop = image.desktop.replace(
                    "./assets/",
                    "/assets/",
                  );

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

            <div>
              {selectedProduct?.gallery &&
                (() => {
                  const image = Object.values(selectedProduct.gallery)[2];

                  const mobile = image.mobile.replace("./assets/", "/assets/");
                  const tablet = image.tablet.replace("./assets/", "/assets/");
                  const desktop = image.desktop.replace(
                    "./assets/",
                    "/assets/",
                  );

                  return (
                    <picture>
                      <source srcSet={mobile} media="(max-width:767px)" />
                      <source
                        srcSet={tablet}
                        media="(min-width:768px and max-width:1023px)"
                      />
                      <source srcSet={desktop} media="(min-width:1024px)" />
                      <img
                        src={mobile}
                        alt={"Gallery image 3"}
                        className="rounded-lg"
                      />
                    </picture>
                  );
                })()}
            </div>
          </div>
        </article>

        <article className="mt-[7.5rem] text-center">
          <h5 className="sm:text-[2rem] sm:leading-9 sm:tracking-[1.14px]">
            You may also like
          </h5>
          <div className="mt-10 space-y-14 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-3 sm:space-y-0">
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
      <GallerySection mobile={false} />
    </>
  );
}

export default ProductCatalog;
