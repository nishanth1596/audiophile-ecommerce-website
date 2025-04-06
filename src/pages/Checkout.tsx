import { useForm } from "react-hook-form";
import CheckoutSummary from "../feature/checkout/CheckoutSummary";
import GoBackButton from "../ui/GoBackButton";
import Input from "../ui/Input";
import { useState } from "react";
import OrderSuccess from "../feature/OrderSuccess/OrderSuccess";

export type CheckoutFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  paymentMethod: "eMoney" | "cod"; // This could either be "eMoney" or "cod"
  eMoneyNumber: string;
  eMoneyPin: string;
};

function Checkout() {
  const [isOrderSuccess, setIsOrderSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CheckoutFormData>();

  function onSubmit() {
    setIsOrderSuccess(true);
    reset();
  }

  return (
    <section className="bg-OffWhite mx-4 mt-4">
      <GoBackButton />

      <article className="mt-6 rounded-lg pb-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-White px-6 pt-6">
            <h4 className="tracking-[1px]">Checkout</h4>
            <p className="subTitle text-PrimaryColor mt-8">Billing details</p>
            <Input
              inputType="text"
              placeholder="Alexei Ward"
              title="Name"
              id="name"
              marginTop="17px"
              register={register}
              requiredMessage="Name is required"
              error={errors?.name?.message}
              pattern={{
                value: /^[A-Za-z\s]+$/,
                message: "Wrong Format",
              }}
            />

            <Input
              id="email"
              inputType="email"
              placeholder="alexei@mail.com"
              title="Email Address"
              marginTop="24px"
              register={register}
              requiredMessage="Email is required"
              error={errors?.email?.message}
              pattern={{
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Wrong Format",
              }}
            />

            <Input
              id="phoneNumber"
              inputType="tel"
              placeholder="+1 202-555-0136"
              title="Phone Number"
              marginTop="24px"
              register={register}
              requiredMessage="Phone number is required"
              error={errors?.phoneNumber?.message}
              pattern={{
                value: /^\d+$/,
                message: "Wrong Format",
              }}
            />

            <p className="subTitle text-PrimaryColor mt-8">Shipping info</p>
            <Input
              id="address"
              inputType="text"
              placeholder="1137 Williams Avenue"
              title="Your Address"
              marginTop="24px"
              register={register}
              requiredMessage="Address is required"
              error={errors?.address?.message}
            />

            <Input
              id="zipcode"
              inputType="text"
              placeholder="10001"
              title="ZIP Code"
              marginTop="24px"
              register={register}
              requiredMessage="Zipcode is required"
              error={errors?.zipcode?.message}
              pattern={{
                value: /^\d+$/,
                message: "Wrong Format",
              }}
            />

            <Input
              id="city"
              inputType="text"
              placeholder="New York"
              title="City"
              marginTop="24px"
              register={register}
              requiredMessage="City is required"
              error={errors?.city?.message}
              pattern={{
                value: /^[A-Za-z\s]+$/,
                message: "Wrong Format",
              }}
            />

            <Input
              id="country"
              inputType="text"
              placeholder="United States"
              title="Country"
              marginTop="24px"
              register={register}
              requiredMessage="Country is required"
              error={errors?.country?.message}
              pattern={{
                value: /^[A-Za-z\s]+$/,
                message: "Wrong Format",
              }}
            />

            <p className="subTitle text-PrimaryColor mt-8">Payment Details</p>
            {/* radio */}
            <div>
              <label
                htmlFor="paymentMethod"
                className="mt-4 flex w-full justify-between text-xs leading-4 font-bold tracking-[-0.21px]"
              >
                Payment Method
                {errors.paymentMethod && (
                  <span className="text-Red text-xs leading-4 font-medium tracking-[-0.21px]">
                    {errors.paymentMethod.message}
                  </span>
                )}
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
                  {...register("paymentMethod", {
                    required: "Please select a payment method",
                  })}
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
                  {...register("paymentMethod", {
                    required: "Please select a payment method",
                  })}
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
              register={register}
              requiredMessage="e-Money number is required"
              error={errors?.eMoneyNumber?.message}
              pattern={{
                value: /^\d+$/,
                message: "Wrong Format",
              }}
            />

            <Input
              id="eMoneyPin"
              inputType="password"
              placeholder="6891"
              title="e-Money PIN"
              marginTop="24px"
              register={register}
              requiredMessage="e-Money pin is required"
              error={errors?.eMoneyPin?.message}
              pattern={{
                value: /^\d+$/,
                message: "Wrong Format",
              }}
            />
          </div>

          <CheckoutSummary />
        </form>
      </article>

      {isOrderSuccess && <OrderSuccess setIsOrderSuccess={setIsOrderSuccess} />}
    </section>
  );
}

export default Checkout;
