import { createPortal } from "react-dom";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";

type CartProps = {
  setShowCart: () => void;
};

function Cart({ setShowCart }: CartProps) {
  const cart = useSelector(getCart);
  const navigate = useNavigate();

  const cartNumItems = cart.length;

  const total = cart
    .map((item) => item.totalPrice)
    .reduce((acc, cur) => acc + cur, 0);

  console.log(cart);

  function handleCheckoutButton() {
    navigate("/checkout");
    setShowCart();
  }

  function handleBackdropClick(event: React.MouseEvent) {
    if (event.target === event.currentTarget) {
      setShowCart();
    }
  }

  return createPortal(
    <section className="">
      <div
        className="bg-opacity-50 absolute top-0 left-0 mt-20 h-full w-full bg-black/50 backdrop-blur-md"
        onClick={handleBackdropClick}
      >
        <div className="relative z-10 mx-6 mt-6 rounded-md bg-white px-7 py-8 shadow-lg">
          <div className="flex justify-between">
            <h5 className="text-lg leading-[1.56rem] tracking-[1.29px]">
              {" "}
              cart({cartNumItems})
            </h5>
            <button className="text-[0.94rem] leading-[1.56rem] font-medium underline opacity-50">
              Remove all
            </button>
          </div>

          <div className="mt-8 space-y-6">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                img={item.image}
                name={item.title}
                unitPrice={item.unitPrice}
                quantity={item.quantity}
                id={item.id}
              />
            ))}
          </div>

          <p className="mt-8 flex justify-between text-lg font-bold uppercase opacity-100">
            <span className="block text-[0.94rem] font-medium opacity-50">
              Total{" "}
            </span>
            &#36; {total}
          </p>

          <button
            className="bg-PrimaryColor subTitle text-White mt-6 inline-block w-full py-4 leading-[18px] uppercase"
            onClick={handleCheckoutButton}
          >
            checkout
          </button>
        </div>
      </div>
    </section>,
    document.getElementById("cart")!,
  );
}

export default Cart;
