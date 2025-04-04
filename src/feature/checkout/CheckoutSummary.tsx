import img from "../../assets/cart/image-xx59-headphones.jpg";
import CheckoutSummaryItem from "./checkoutSummaryItem";

function CheckoutSummary() {
  return (
    <div className="bg-White mt-8 px-6 py-8">
      <h6 className="text-lg leading-[1.56rem] font-bold tracking-[1.29px] uppercase">
        Summary
      </h6>

      <div className="mt-[31px] space-y-6">
        <CheckoutSummaryItem
          img={img}
          title="XX99 MK II"
          price={"2,999"}
          quantity={1}
        />
      </div>

      <div className="mt-8 space-y-2">
        <p className="flex justify-between uppercase">
          <span className="opacity-50"> Total </span>
          <span className="block text-lg leading-[1.56rem] font-bold opacity-100">
            &#36;X
          </span>
        </p>
        <p className="flex justify-between uppercase">
          <span className="opacity-50"> Shipping </span>
          <span className="block text-lg leading-[1.56rem] font-bold opacity-100">
            &#36;X
          </span>
        </p>
        <p className="flex justify-between uppercase">
          <span className="opacity-50"> VAT(included) </span>
          <span className="block text-lg leading-[1.56rem] font-bold opacity-100">
            &#36;X
          </span>
        </p>
        <p className="flex justify-between uppercase">
          <span className="opacity-50"> Grand total </span>
          <span className="text-PrimaryColor block text-lg leading-[1.56rem] font-bold opacity-100">
            &#36;X
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
