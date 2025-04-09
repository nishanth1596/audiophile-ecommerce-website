import { createPortal } from "react-dom";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { getCart, removeCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

type CartProps = {
  setShowCart: () => void;
};

function Cart({ setShowCart }: CartProps) {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartNumItems = cart.length;

  const total = cart
    .map((item) => item.totalPrice)
    .reduce((acc, cur) => acc + cur, 0);

  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cartNumItems === 0) {
      setShowCart();
    }

    // close the cart if clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setShowCart();
      }
    }

    // Attach event Listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartNumItems, setShowCart]);

  function handleCheckoutButton() {
    toast.success("Redirecting to checkout...");

    // Set a timeout to close the cart after the toast is removed
    setTimeout(() => {
      setShowCart();
      navigate("/checkout");
    }, 1500); // 1500ms for toast to disappear (this is the default duration for a toast)
  }

  function handleRemoveAll() {
    dispatch(removeCart());

    // Show a success toast for clearing the cart
    toast.success("Cart cleared!");

    // Set a timeout to remove the cart after the toast is removed
    setTimeout(() => {
      setShowCart();
    }, 1500); // Wait for the toast to finish before closing the cart
  }

  return createPortal(
    <section className="bg-opacity-50 absolute top-0 left-0 mt-20 h-full w-full bg-black/50 backdrop-blur-md">
      <div className="sm:absolute sm:right-0 sm:max-w-[377px]">
        <div
          ref={cartRef}
          className="relative z-10 mx-6 mt-6 rounded-md bg-white px-7 py-8 shadow-lg"
        >
          <div className="flex justify-between">
            <h5 className="text-lg leading-[1.56rem] tracking-[1.29px]">
              {" "}
              cart({cartNumItems})
            </h5>
            <button
              onClick={handleRemoveAll}
              className="text-[0.94rem] leading-[1.56rem] font-medium underline opacity-50"
            >
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
