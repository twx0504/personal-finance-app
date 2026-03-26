const TextInput = ({ id, labelTitle, children, ...props }) => {
  return (
    <>
      <label className="text-preset-5-bold text-grey-500" htmlFor={id}>
        {labelTitle}
      </label>

      {/* Relative wrapper — allows absolutely positioned children (e.g. eye button, helper text) to anchor to this input */}
      <div className="relative">
        <input
          id={id}
          className="text-preset-4-bold block mt-50 peer w-full h-11.25 border border-beige-500 rounded-md pt-150 pb-150 pl-250 pr-250"
          {...props}
        />
        {/* If children is undefined, null, or false, render nothing, which is the intentional behavior in this component. */}
        {children}
      </div>
    </>
  );
};

export default TextInput;
