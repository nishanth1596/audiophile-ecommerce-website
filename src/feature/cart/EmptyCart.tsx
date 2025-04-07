import { useNavigate } from "react-router-dom";

const EmptyCartMessage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="mx-8 mt-20 flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Your Cart is Empty</h2>
      <p className="mb-6 text-gray-500 opacity-100">
        It looks like you don't have any items in your cart.
      </p>
      <button
        onClick={handleClick}
        className="bg-PrimaryColor hover:bg-PrimaryColor-dark rounded-lg px-4 py-2 font-semibold text-white"
      >
        Click here to start shopping
      </button>
    </div>
  );
};

export default EmptyCartMessage;
