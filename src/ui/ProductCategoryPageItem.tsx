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
  // const { mobile, desktop, tablet } = productImage;
  const { mobile } = productImage;
  const fixedMobileImagePath = mobile.replace("./assets/", "/assets/");

  return (
    <article className="mx-6 mt-16">
      <img src={fixedMobileImagePath} alt={name} className="rounded-lg" />

      <div className="mt-8">
        {newProduct && (
          <p className="text-PrimaryColor Overline">New product</p>
        )}
        <h4 className="mt-6 tracking-[1px]">{name}</h4>
        <p className="text-PureBlack my-6 opacity-50">{description}</p>

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
