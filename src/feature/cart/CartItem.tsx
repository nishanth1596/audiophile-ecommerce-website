import { useDispatch } from "react-redux";
import IncreaseDecreaseQuantityBtn from "../../ui/IncreaseDecreaseQuantityBtn";
import { decreaseCart, increaseCart } from "./cartSlice";

type ImageProp = {
  mobile: string;
  desktop: string;
  tablet: string;
};

type CartItem = {
  img: ImageProp;
  unitPrice: number;
  name: string;
  quantity: number;
  id: number;
};

function CartItem({ img, unitPrice, name, quantity, id }: CartItem) {
  const mobile = img.mobile?.replace("./assets/", "/assets/");
  const tablet = img.tablet?.replace("./assets/", "/assets/");
  const desktop = img.desktop?.replace("./assets/", "/assets/");

  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseCart({ id }));
  }

  function handleDecrease() {
    dispatch(decreaseCart({ id }));
  }

  return (
    <div className="flex items-center gap-4">
      <picture>
        <source srcSet={mobile} media="(max-width:767px)" />
        <source
          srcSet={tablet}
          media="(min-width:767px) and (max-width:1023px)"
        />
        <source srcSet={desktop} media="(min-width:1024px)" />

        <img src={mobile} alt={name} className="w-16" />
      </picture>

      <div className="flex w-full items-center justify-between gap-5">
        <div>
          <h6 className="text-[0.94rem] leading-[1.56rem] font-bold uppercase">
            {name}
          </h6>
          <p className="text-sm leading-[1.56rem] font-bold opacity-50">
            &#36; {unitPrice}
          </p>
        </div>

        <IncreaseDecreaseQuantityBtn
          handleDecreaseQuantity={handleDecrease}
          handleIncreaseQuantity={handleIncrease}
          quantity={quantity}
          isOnCart={true}
        />
      </div>
    </div>
  );
}

export default CartItem;
