import { useState } from "react";
import InputField from "./TextInput";
import eyeIcon from "../assets/images/icon-show-password.svg";

const PasswordInput = ({ type, helperText, ...props }) => {
  const [canShow, setCanShow] = useState(false);

  const handlePasswordDisplay = () => {
    setCanShow(!canShow);
  };

  return (
    /* Wrapper needed to compensate for absolutely positioned children (helper text, eye button) 
   that are taken out of normal flow. Extra bottom padding adjusts based on whether 
   helperText is present, since it adds additional visual height below the input. */
    <div className={helperText ? "pb-400" : "pb-200"}>
      <InputField {...props} type={canShow ? "text" : type}>
        {helperText && (
          <p className="absolute right-0 text-preset-5 mt-50 text-grey-500">
            {helperText}
          </p>
        )}
        <button
          type="button"
          className="w-200 h-200 absolute right-200 top-1/2 -translate-y-1/2 cursor-pointer"
          aria-label="Show password"
          onClick={handlePasswordDisplay}
        >
          <img className="w-200 h-200" src={eyeIcon} alt="" />
        </button>
      </InputField>
    </div>
  );
};

export default PasswordInput;
