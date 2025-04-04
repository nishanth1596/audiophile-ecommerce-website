import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductData } from "../services/apiProductdata";
import LoadingSpinner from "../ui/LoadingSpinner";
import { ProductProps } from "../ui/ProductCategoryPage";
import RelatedProductsItem from "../ui/RelatedProductsItem";

function ProductCatalog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<ProductProps[]>({
    queryKey: ["ProductData"],
    queryFn: fetchProductData,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) return <LoadingSpinner />;

  const selectedProduct = data?.find((item) => item.id === parseInt(id ?? ""));

  const updatedMobileImgPath = selectedProduct?.categoryImage.mobile.replace(
    "./assets/",
    "/src/assets/",
  );

  return (
    <section className="mx-6">
      <button
        onClick={() => navigate(-1)}
        className="text-PureBlack mt-4 inline-block text-[0.94rem] leading-[1.56rem] capitalize opacity-50"
      >
        Go back
      </button>

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
        <div className="bg-LightGray flex w-full items-center justify-center gap-5 px-[15.5px] py-[15px]">
          <button className="inline-block w-4 opacity-25">&#8722;</button>

          <span className="w-4 text-[13px] leading-[18px] font-bold tracking-[1px]">
            X
          </span>

          <button className="inline-block w-4 opacity-25">&#43;</button>
        </div>

        <button className="bg-PrimaryColor text-White w-full py-[15px] pr-[30.5px] pl-[34.5px] text-[13px] leading-[18px] font-bold tracking-[1px] uppercase">
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
            const mobile = image.mobile.replace("./assets/", "/src/assets/");
            const tablet = image.tablet.replace("./assets/", "/src/assets/");
            const desktop = image.desktop.replace("./assets/", "/src/assets/");

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
// http://localhost:5173/4/xx99-mark-two-headphones
// http://localhost:5173/headphones/4/xx99-mark-two-headphones

export default ProductCatalog;
