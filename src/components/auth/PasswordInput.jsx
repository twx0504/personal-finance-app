import { useState } from "react";
import TextInput from "../ui/TextInput";
import showIcon from "../../assets/images/icon-show-password.svg";
import hideIcon from "../../assets/images/icon-hide-password.svg";

const PasswordInput = ({ type, helperText, isValid, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordDisplay = () => {
    setShowPassword((prev) => !prev);
  };

  // const helperTextColor = getHelperTextColor(isValid);

  return (
    /* Wrapper needed to compensate for absolutely positioned children (helper text, eye button) 
   that are taken out of normal flow. Extra bottom padding adjusts based on whether 
   helperText is present, since it adds additional visual height below the input. */
    // <div className={helperText ? "pb-400" : "pb-200"}>
     
    // </div>
     <TextInput
        {...props}
        isValid={isValid}
        type={showPassword ? "text" : type}
        helperText={helperText}
        rightElement={
          <button
            type="button"
            className="flex justify-center items-center w-300 h-300 cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            onClick={handlePasswordDisplay}
          >
            <img
              className="w-200 h-200"
              src={showPassword ? hideIcon : showIcon}
              alt=""
              aria-hidden="true"
            />
          </button>
        }
      ></TextInput>
  );
};

export default PasswordInput;
