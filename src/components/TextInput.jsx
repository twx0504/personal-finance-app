const TextInput = ({ id, labelTitle, children, isValid, ...props }) => {
  return (
    <>
      <label className="text-preset-5-bold text-grey-500" htmlFor={id}>
        {labelTitle}
      </label>

      {/* Relative wrapper — allows absolutely positioned children (e.g. eye button, helper text) to anchor to this input */}
      <div className="relative">
        <input
          id={id}
          className={`${isValid === false ? "outline-red border-red" : "outline-grey-900 border-beige-500 "} text-preset-4-bold block mt-50 peer w-full h-11.25 border rounded-md pt-150 pb-150 pl-250 pr-250`}
          {...props}
        />
        {/* If children is undefined, null, or false, render nothing, which is the intentional behavior in this component. */}
        {children}
      </div>
    </>
  );
};

export default TextInput;
