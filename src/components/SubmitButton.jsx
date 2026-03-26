const SubmitButton = ({ buttonName }) => {
  return (
    <>
      <button
        type="submit"
        className="text-preset-4 block w-full mb-400 bg-grey-900 text-white h-13.25 rounded-md cursor-pointer"
      >
        {buttonName}
      </button>
    </>
  );
};

export default SubmitButton;
