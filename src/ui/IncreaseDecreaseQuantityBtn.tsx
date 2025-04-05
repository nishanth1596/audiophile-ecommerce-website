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
      className={`bg-LightGray flex w-full items-center justify-center gap-5 ${isOnCart ? "max-w-24 px-3 py-1.5" : "px-[15.5px] py-[15px]"} `}
    >
      <button
        className="inline-block w-4 opacity-25"
        onClick={handleDecreaseQuantity}
      >
        &#8722;
      </button>

      <span className="w-4 text-[13px] leading-[18px] font-bold tracking-[1px]">
        {quantity}
      </span>

      <button
        className="inline-block w-4 opacity-25"
        onClick={handleIncreaseQuantity}
      >
        &#43;
      </button>
    </div>
  );
}

export default IncreaseDecreaseQuantityBtn;
