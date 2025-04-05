import { useSelector } from "react-redux";
import CheckoutSummaryItem from "./checkoutSummaryItem";
import { CartItemProps, getCart } from "../cart/cartSlice";

function CheckoutSummary() {
  const cart = useSelector(getCart);

  const shippingCharge = 50;
  const cartAmount = cart
    .map((item: CartItemProps) => item.totalPrice)
    .reduce((acc: number, cur: number) => acc + cur, 0);
  const vatAmount = cartAmount ? (cartAmount * 0.2).toFixed(0) : 0;
  const grandTotal = cartAmount + Number(shippingCharge);

  return (
    <div className="bg-White mt-8 px-6 py-8">
      <h6 className="text-lg leading-[1.56rem] font-bold tracking-[1.29px] uppercase">
        Summary
      </h6>

      <div className="mt-[31px] space-y-6">
        {cart.map((item: CartItemProps) => (
          <CheckoutSummaryItem
            key={item.id}
            img={item.image}
            price={item.unitPrice}
            quantity={item.quantity}
            title={item.title}
          />
        ))}
      </div>

      <div className="mt-8 space-y-2">
        <p className="flex justify-between uppercase">
          <span className="opacity-50"> Total </span>
          <span className="block text-lg leading-[1.56rem] font-bold opacity-100">
            &#36; {cartAmount}
          </span>
        </p>
        <p className="flex justify-between uppercase">
          <span className="opacity-50"> Shipping </span>
          <span className="block text-lg leading-[1.56rem] font-bold opacity-100">
            &#36; {shippingCharge}
          </span>
        </p>
        <p className="flex justify-between uppercase">
          <span className="opacity-50"> VAT(included) </span>
          <span className="block text-lg leading-[1.56rem] font-bold opacity-100">
            &#36; {vatAmount}
          </span>
        </p>
        <p className="flex justify-between uppercase">
          <span className="opacity-50"> Grand total </span>
          <span className="text-PrimaryColor block text-lg leading-[1.56rem] font-bold opacity-100">
            &#36; {grandTotal}
          </span>
        </p>
      </div>

      <button className="bg-PrimaryColor text-White mt-8 w-full py-4 text-[13px] font-bold tracking-[1px] uppercase">
        continue & pay
      </button>
    </div>
  );
}

export default CheckoutSummary;
