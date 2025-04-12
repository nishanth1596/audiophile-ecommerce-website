type IncreaseDecreaseQuantityBtnProps = {
  handleDecreaseQuantity: () => void;
  handleIncreaseQuantity: () => void;
  quantity: number;
  isOnCart: boolean;
};

function IncreaseDecreaseQuantityBtn({
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  quantity,
  isOnCart,
}: IncreaseDecreaseQuantityBtnProps) {
  return (
    <div
      className={`bg-LightGray flex w-full items-center justify-center gap-5 ${isOnCart ? "max-w-24 px-3 py-1.5" : "px-[15.5px] py-[15px] sm:max-w-[120px]"} `}
    >
      <button
        className="hover:text-PrimaryColor inline-block w-4 cursor-pointer opacity-25 hover:opacity-100"
        onClick={handleDecreaseQuantity}
      >
        &#8722;
      </button>

      <span className="w-4 text-[13px] leading-[18px] font-bold tracking-[1px] transition-all duration-300 ease-in-out">
        {quantity}
      </span>

      <button
        className="hover:text-PrimaryColor inline-block w-4 cursor-pointer opacity-25 hover:opacity-100"
        onClick={handleIncreaseQuantity}
      >
        &#43;
      </button>
    </div>
  );
}

export default IncreaseDecreaseQuantityBtn;
