import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Cart from "../feature/cart/Cart";
import { useSelector } from "react-redux";
import { getCart } from "../feature/cart/cartSlice";

import hamburgerIcon from "/assets/shared/tablet/icon-hamburger.svg";
import GallerySection from "./GallerySection";
import NavBar from "./NavBar";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close the menu when clicking outside of it or pressing the Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleEscapePress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    // Add event listeners on component mount
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapePress);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, []);

  const cart = useSelector(getCart);
  const cartNumItems = cart.length;

  function handleShowCart() {
    if (cartNumItems === 0) return;

    setShowCart((show) => !show);
  }

  function handleShowMenu() {
    setIsMenuOpen((show) => !show);
  }

  return (
    <>
      <header className="bg-Black text-White border-b-White/10 border-b-[1px] px-6 py-8 md:px-10 lg:pb-9">
        <div className="flex items-center justify-between lg:mx-auto lg:max-w-[69.34rem]">
          <div className="flex items-center gap-20 sm:gap-10">
            <button
              className="lg:hidden"
              onClick={handleShowMenu}
              aria-label={
                isMenuOpen ? "Click to close menu" : "Click to open menu"
              }
            >
              <img src={hamburgerIcon} alt="" />
            </button>
            {isMenuOpen && (
              <div className="bg-PureBlack/50 absolute inset-0 mt-[90px]">
                <div
                  className="bg-White text-PureBlack/75 absolute z-10 w-full rounded-b-lg pb-9"
                  ref={menuRef}
                >
                  <GallerySection mobile={true} setIsMenuOpen={setIsMenuOpen} />
                  <GallerySection
                    mobile={false}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                </div>
              </div>
            )}

            <Logo />
          </div>

          <NavBar />

          <button className="relative" onClick={handleShowCart}>
            <svg
              width="23"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-50"
            >
              <path
                d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
            {cartNumItems > 0 && (
              <span className="bg-SecondaryColor absolute top-0 right-0 flex aspect-square h-5 min-h-[20px] w-5 min-w-[20px] translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs text-white">
                {cartNumItems}
              </span>
            )}
          </button>
        </div>
      </header>
      {showCart && <Cart setShowCart={() => setShowCart(false)} />}
    </>
  );
}

export default Header;
