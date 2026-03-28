import { useState } from "react";
import InputField from "./TextInput";
import showIcon from "../assets/images/icon-show-password.svg";
import hideIcon from "../assets/images/icon-hide-password.svg";

const getHelperTextColor = (isValid) => {
  if (isValid === null) {
    return "text-grey-500";
  }

  return isValid ? "text-green" : "text-red";
};

const PasswordInput = ({ type, helperText, isValid, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordDisplay = () => {
    setShowPassword(!showPassword);
  };

  const helperTextColor = getHelperTextColor(isValid);

  return (
    /* Wrapper needed to compensate for absolutely positioned children (helper text, eye button) 
   that are taken out of normal flow. Extra bottom padding adjusts based on whether 
   helperText is present, since it adds additional visual height below the input. */
    <div className={helperText ? "pb-400" : "pb-200"}>
      <InputField
        {...props}
        isValid={isValid}
        type={showPassword ? "text" : type}
      >
        {helperText && (
          <p
            className={`${helperTextColor} absolute right-0 text-preset-5 mt-50`}
          >
            {helperText}
          </p>
        )}
        <button
          type="button"
          className="flex justify-center items-center w-300 h-300 absolute right-200 top-1/2 -translate-y-1/2 cursor-pointer"
          aria-label={showPassword ? "Hide password" : "Show Password"}
          onClick={handlePasswordDisplay}
        >
          <img
            className="w-200 h-200"
            /* Eye button shows the act */
            src={showPassword ? hideIcon : showIcon}
            alt=""
          />
        </button>
      </InputField>
    </div>
  );
};

export default PasswordInput;
