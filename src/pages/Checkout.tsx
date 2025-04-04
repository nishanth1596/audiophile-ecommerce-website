import GoBackButton from "../ui/GoBackButton";
import Input from "../ui/Input";

function Checkout() {
  return (
    <section className="bg-OffWhite mx-4 mt-4">
      <GoBackButton />

      <article className="bg-White mt-6 rounded-lg px-6 pt-6 pb-8">
        <h4 className="tracking-[1px]">Checkout</h4>
        <form>
          <p className="subTitle text-PrimaryColor mt-8">Billing details</p>
          <Input
            inputType="text"
            placeholder="Alexei Ward"
            title="Name"
            id="name"
            marginTop="17px"
          />

          <Input
            id="email"
            inputType="email"
            placeholder="alexei@mail.com"
            title="Email Address"
            marginTop="24px"
          />

          <Input
            id="phoneNumber"
            inputType="tel"
            placeholder="+1 202-555-0136"
            title="Phone Number"
            marginTop="24px"
          />

          <p className="subTitle text-PrimaryColor mt-8">Shipping info</p>
          <Input
            id="address"
            inputType="url"
            placeholder="1137 Williams Avenue"
            title="Your Address"
            marginTop="24px"
          />

          <Input
            id="zipCode"
            inputType="text"
            placeholder="10001"
            title="ZIP Code"
            marginTop="24px"
          />

          <Input
            id="city"
            inputType="text"
            placeholder="New York"
            title="City"
            marginTop="24px"
          />

          <Input
            id="country"
            inputType="text"
            placeholder="United States"
            title="Country"
            marginTop="24px"
          />

          <p className="subTitle text-PrimaryColor mt-8">Payment Details</p>
          {/* radio */}
          <div>
            <label
              htmlFor="paymentMethod"
              className="text-xs leading-4 font-bold tracking-[-0.21px]"
            >
              Payment Method
            </label>

            <label
              htmlFor="eMoney"
              className="border-MediumGray focus:border-PrimaryColor active:border-PrimaryColor peer-checked:border-PrimaryColor mt-[17px] flex items-center gap-4 rounded-lg border-[1px] px-4 py-[18px]"
            >
              <input
                type="radio"
                className="accent-PrimaryColor peer"
                id="eMoney"
                value="eMoney"
                name="paymentMethod"
              />
              <span className="block">e-Money</span>
            </label>

            <label
              htmlFor="cod"
              className="border-MediumGray focus:border-PrimaryColor active:border-PrimaryColor peer-checked:border-PrimaryColor mt-[17px] flex items-center gap-4 rounded-lg border-[1px] px-4 py-[18px]"
            >
              <input
                type="radio"
                id="cod"
                className="accent-PrimaryColor block"
                value="cod"
                name="paymentMethod"
              />
              <span>Cash on Delivery</span>
            </label>
          </div>

          <Input
            id="eMoneyNumber"
            inputType="text"
            placeholder="238532993"
            title="e-Money Number"
            marginTop="24px"
          />

          <Input
            id="eMoneyPin"
            inputType="password"
            placeholder="6891"
            title="e-Money PIN"
            marginTop="24px"
          />
        </form>
      </article>
    </section>
  );
}

export default Checkout;
