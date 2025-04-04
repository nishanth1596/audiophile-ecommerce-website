type CheckoutSummaryItemProps = {
  img: string;
  title: string;
  price: string;
  quantity: number;
};

function CheckoutSummaryItem({
  img,
  title,
  price,
  quantity,
}: CheckoutSummaryItemProps) {
  return (
    <div className="flex items-center gap-4">
      <img src={img} alt={title} className="w-16" />
      <div className="flex w-full items-start justify-between">
        <div>
          <p className="font-bold opacity-100">{title}</p>
          <p className="text-sm font-bold opacity-50">&#36;{price}</p>
        </div>
        <p className="op50 font-bold">x{quantity}</p>
      </div>
    </div>
  );
}

export default CheckoutSummaryItem;
