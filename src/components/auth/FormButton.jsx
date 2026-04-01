const FormButton = ({ buttonName, type, onClick, loadingName, isLoading }) => {
  return (
    <button
      type={type}
      className={`${isLoading ? "opacity-20 cursor-not-allowed" : "cursor-pointer"} text-preset-4 block w-full h-13.25 rounded-md bg-grey-900 text-white`}
      onClick={typeof onClick === "function" ? onClick : undefined}
      disabled={isLoading}
    >
      {isLoading ? loadingName : buttonName}
    </button>
  );
};

export default FormButton;
