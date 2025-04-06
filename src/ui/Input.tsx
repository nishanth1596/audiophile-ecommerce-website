import { UseFormRegister } from "react-hook-form";
import { CheckoutFormData } from "../pages/Checkout";

type InputProps = {
  id: keyof CheckoutFormData;
  title: string;
  inputType: string;
  placeholder: string;
  marginTop?: string;
  requiredMessage: string;
  error: string | undefined;
  register: UseFormRegister<CheckoutFormData>;
  pattern?: {
    value: RegExp;
    message: string;
  };
};

function Input({
  id,
  title,
  inputType,
  placeholder,
  marginTop,
  register,
  requiredMessage,
  error,
  pattern,
}: InputProps) {
  return (
    <>
      <label
        htmlFor={id}
        className="relative inline-block w-full text-xs leading-4 font-bold tracking-[-0.21px]"
        style={{ marginTop: marginTop }}
      >
        {title}
        {error && (
          <p className="text-Red absolute top-0 right-0 text-xs leading-4 font-medium tracking-[-0.21px]">
            {error}
          </p>
        )}
      </label>

      <input
        type={inputType}
        {...register(id, {
          required: requiredMessage,
          pattern: pattern,
        })}
        placeholder={placeholder}
        className="border-MediumGray text-Black/40 mt-[9px] block w-full rounded-lg border-[1px] pt-[18px] pb-[19px] pl-6 text-sm leading-[1.19rem] font-bold tracking-[-0.25px]"
      />
    </>
  );
}

export default Input;
