import SeeProductNavLink from "./SeeProductNavLink";

type ProductCategoryPageItemProps = {
  productImage: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
  name: string;
  description: string;
  newProduct: boolean;
  slug: string;
  category: string;
  id: number;
};

function ProductCategoryPageItem({
  productImage,
  name,
  description,
  newProduct,
  slug,
  category,
  id,
}: ProductCategoryPageItemProps) {
  const mobileImg = productImage.mobile
    .replace("./assets/", "/assets/")
    .replace("image-product.jpg", "image-category-page-preview.jpg");
  const tabletImg = productImage.tablet
    .replace("./assets/", "/assets/")
    .replace("image-product.jpg", "image-category-page-preview.jpg");
  const desktopImg = productImage.desktop
    .replace("./assets/", "/assets/")
    .replace("image-product.jpg", "image-category-page-preview.jpg");

  return (
    <article className="mx-6 mt-16 sm:mx-10 sm:mt-[7.5rem]">
      <picture>
        <source srcSet={mobileImg} media="(max-width:767px)" />
        <source
          srcSet={tabletImg}
          media="(min-width:767px) and (max-width:1023px)"
        />
        <source srcSet={desktopImg} media="(min-width:1024px)" />
        <img src={mobileImg} alt={name} className="rounded-lg" />
      </picture>

      <div className="mx-auto mt-8 sm:mt-[3.25rem] sm:max-w-[35.75rem]">
        {newProduct && (
          <p className="text-PrimaryColor Overline">New product</p>
        )}
        <h4 className="mt-6 tracking-[1px] sm:mt-4 sm:px-5 sm:text-[2.5rem] sm:leading-11 sm:tracking-[1.43px]">
          {name}
        </h4>
        <p className="text-PureBlack my-6 opacity-50 sm:mt-8">{description}</p>

        <SeeProductNavLink
          backgroundColor="#d87d4a"
          navigateTo={`/${category}/${id}/${slug}`}
          textColor="#fff"
          isBorderRequired={false}
        />
      </div>
    </article>
  );
}

export default ProductCategoryPageItem;
