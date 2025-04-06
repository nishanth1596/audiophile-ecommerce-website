import { ImageItemProps } from "../cart/cartSlice";

type CheckoutSummaryItemProps = {
  img: ImageItemProps;
  title: string;
  price: number;
  quantity: number;
};

function CheckoutSummaryItem({
  img,
  title,
  price,
  quantity,
}: CheckoutSummaryItemProps) {
  const mobile = img.mobile?.replace("./assets/", "/src/assets/");
  const tablet = img.tablet?.replace("./assets/", "/src/assets/");
  const desktop = img.desktop?.replace("./assets/", "/src/assets/");

  const formattedPrice = price.toLocaleString();

  return (
    <div className="flex items-center gap-4">
      <picture>
        <source srcSet={mobile} media="(max-width:767px)" />
        <source
          srcSet={tablet}
          media="(min-width:767px) and (max-width:1023px)"
        />
        <source srcSet={desktop} media="(min-width:1024px)" />

        <img src={mobile} alt={title} className="w-16" />
      </picture>
      <div className="flex w-full items-start justify-between">
        <div>
          <p className="font-bold opacity-100">{title}</p>
          <p className="text-sm font-bold opacity-50">&#36; {formattedPrice}</p>
        </div>
        <p className="font-bold opacity-50">x{quantity}</p>
      </div>
    </div>
  );
}

export default CheckoutSummaryItem;
