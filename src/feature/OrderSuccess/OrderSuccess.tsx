import { createPortal } from "react-dom";

import successIcon from "../../assets/checkout/icon-order-confirmation.svg";
import CheckoutSummaryItem from "../checkout/checkoutSummaryItem";
import { useDispatch, useSelector } from "react-redux";
import { getCart, startNewOrder } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type OrderSuccessProps = {
  setIsOrderSuccess: (value: boolean) => void;
};

function OrderSuccess({ setIsOrderSuccess }: OrderSuccessProps) {
  const cart = useSelector(getCart);
  const remainingNumItems = cart.length - 1;

  const total = cart
    .map((item) => item.totalPrice)
    .reduce((acc, cur) => acc + cur, 0)
    .toLocaleString();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleButtonClick() {
    dispatch(startNewOrder());
    navigate("/");
    setIsOrderSuccess(false);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return createPortal(
    <div className="bg-Black/50 absolute inset-0 items-center justify-center">
      <div className="bg-White mx-6 mt-56 p-8">
        <img src={successIcon} alt="Success Icon" />
        <h3 className="mt-6 text-2xl leading-7 font-bold tracking-[0.86px] uppercase">
          Thank you <span className="block">for your order</span>
        </h3>

        <p className="mt-4 opacity-50">
          You will receive an email confirmation shortly.
        </p>

        <div className="bg-LightGray mt-6 overflow-hidden rounded-lg">
          <div className="p-6">
            <CheckoutSummaryItem
              title={cart[0].title}
              price={cart[0].unitPrice}
              quantity={cart[0].quantity}
              img={cart[0].image}
            />

            {remainingNumItems > 1 && (
              <p className="border-t-Black/10 mt-3 border-t-[1px] pt-3 text-center text-xs leading-4 font-bold tracking-[-0.21px] opacity-50">
                and {remainingNumItems} other item(s)
              </p>
            )}
          </div>

          <h6 className="text-White bg-PureBlack px-6 pt-3.5 pb-5 leading-[1.56rem]">
            <span className="text-[0.94rem] font-medium uppercase opacity-50">
              Grand total
            </span>
            <span className="block text-lg font-bold">&#36; {total}</span>
          </h6>
        </div>

        <button
          onClick={handleButtonClick}
          className="bg-PrimaryColor text-White mt-6 block w-full py-4 text-[13px] leading-[18px] font-bold tracking-[1px] uppercase"
        >
          Back to home
        </button>
      </div>
    </div>,
    document.getElementById("success")!,
  );
}

export default OrderSuccess;
