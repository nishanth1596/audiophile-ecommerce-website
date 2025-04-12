import { useForm } from "react-hook-form";
import CheckoutSummary from "../feature/checkout/CheckoutSummary";
import GoBackButton from "../ui/GoBackButton";
import Input from "../ui/Input";
import { useState } from "react";
import OrderSuccess from "../feature/OrderSuccess/OrderSuccess";

import codIcon from "/assets/checkout/icon-cash-on-delivery.svg";
import { useSelector } from "react-redux";
import { getCart } from "../feature/cart/cartSlice";
import EmptyCartMessage from "../feature/cart/EmptyCart";

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
    watch,
  } = useForm<CheckoutFormData>();

  const paymentMethod = watch("paymentMethod");

  const cart = useSelector(getCart);

  function onSubmit() {
    setIsOrderSuccess(true);
    reset();
  }

  if (cart.length === 0) return <EmptyCartMessage />;

  return (
    <section className="bg-OffWhite mx-4 mt-4 sm:mx-10 sm:mt-0 lg:mx-12 xl:mx-auto xl:max-w-[69.38rem]">
      <GoBackButton />

      <article className="mt-6 rounded-lg pb-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:grid lg:grid-cols-[730fr_350fr] lg:gap-x-[30px]"
        >
          <div>
            <div className="bg-White px-6 pt-6 pb-8 sm:px-7 sm:pt-[1.88rem]">
              <h4 className="tracking-[1px] sm:text-[2rem] sm:leading-9 sm:tracking-[1.14px]">
                Checkout
              </h4>
              <p className="subTitle text-PrimaryColor mt-8 sm:mt-10 sm:tracking-[0.93px]">
                Billing details
              </p>

              <div className="sm:grid sm:grid-cols-2 sm:gap-x-4">
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
                    value: /^(?:\+91[-\s]?)?[6-9]\d{9}$/,
                    message: "Wrong Format",
                  }}
                />
              </div>

              <p className="subTitle text-PrimaryColor mt-8 sm:mt-[53px]">
                Shipping info
              </p>
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

              <div className="sm:mt-4 sm:grid sm:grid-cols-2 sm:gap-x-4">
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
              </div>

              <p className="subTitle text-PrimaryColor mt-8">Payment Details</p>
              {/* radio */}
              <div className="sm:grid sm:grid-cols-2 sm:gap-x-4">
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
                  className="border-MediumGray focus:border-PrimaryColor active:border-PrimaryColor peer-checked:border-PrimaryColor mt-[17px] flex cursor-pointer items-center gap-4 rounded-lg border-[1px] px-4 py-[18px]"
                  style={{
                    borderColor:
                      paymentMethod === "eMoney"
                        ? "var(--color-PrimaryColor)"
                        : "",
                  }}
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
                  <span className="tracking-[-0.25px]leading-[19px] block text-sm font-bold">
                    e-Money
                  </span>
                </label>

                <label
                  htmlFor="cod"
                  className="border-MediumGray focus:border-PrimaryColor active:border-PrimaryColor peer-checked:border-PrimaryColor mt-[17px] flex cursor-pointer items-center gap-4 rounded-lg border-[1px] px-4 py-[18px] sm:col-start-2"
                  style={{
                    borderColor:
                      paymentMethod === "cod"
                        ? "var(--color-PrimaryColor)"
                        : "",
                  }}
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
                  <span className="tracking-[-0.25px]leading-[19px] block text-sm font-bold">
                    Cash on Delivery
                  </span>
                </label>
              </div>

              {paymentMethod === "eMoney" && (
                <div className="mt-8 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-x-4">
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
              )}

              {paymentMethod === "cod" && (
                <div className="mt-8 flex items-center gap-8">
                  <img
                    src={codIcon}
                    alt="Icon depicting you have selected Cash on Delivery as a payment method"
                  />
                  <p className="opacity-50">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>

          <CheckoutSummary />
        </form>
      </article>

      {isOrderSuccess && <OrderSuccess setIsOrderSuccess={setIsOrderSuccess} />}
    </section>
  );
}

export default Checkout;
