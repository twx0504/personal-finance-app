import { getBorderColor, getHelperTextColor } from "../../utils/input";

const TextInput = ({
  id,
  labelTitle,
  children,
  isValid,
  hideLabel,
  rightElement,
  leftElement,
  helperText,
  ...props
}) => {
  const labelClass = hideLabel
    ? "absolute w-[1px] h-[1px] p-0 m-[-1px] whitespace-nowrap overflow-hidden [clip:rect(0,0,0,0)]"
    : "text-preset-5-bold text-grey-500";
  const inputClass = `${getBorderColor(isValid)} text-preset-4 block mt-50 peer w-full h-11.25 border rounded-md pt-150 pb-150 pl-250 pr-250 ${leftElement && "pl-[48px]"}`;
  const helperTextColor = getHelperTextColor(isValid);
  return (
    <>
      {labelTitle && (
        <label className={labelClass} htmlFor={id}>
          {labelTitle}
        </label>
      )}

      {/* Relative wrapper — allows absolutely positioned children (e.g. eye button, helper text) to anchor to this input */}
      <div className="relative">
        <input
          id={id}
          className={inputClass}
          aria-label={!labelTitle ? props.placeholder : undefined}
          {...props}
        />
        {leftElement && (
          <div className={`absolute left-200 top-1/2 -translate-y-1/2`}>
            {leftElement}
          </div>
        )}
        {rightElement && (
          <div className={`absolute right-200 top-1/2 -translate-y-1/2`}>
            {rightElement}
          </div>
        )}
        {helperText && (
          <p
            className={`${helperTextColor} absolute right-0 text-preset-5 mt-50`}
          >
            {helperText}
          </p>
        )}
      </div>
    </>
  );
};

export default TextInput;
