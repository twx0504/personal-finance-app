const FormButton = ({ buttonName, type, onClick, loadingName, isLoading, buttonClassName="bg-grey-900 text-white" }) => {
  return (
    <button
      type={type}
      className={`${isLoading ? "opacity-20 cursor-not-allowed" : "cursor-pointer"} text-preset-4-bold block w-full h-13.25 rounded-md ${buttonClassName}`}
      onClick={typeof onClick === "function" ? onClick : undefined}
      disabled={isLoading}
    >
      {isLoading ? loadingName : buttonName}
    </button>
  );
};

export default FormButton;
