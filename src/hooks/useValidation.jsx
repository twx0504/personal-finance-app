import { useState } from "react";

const useValidation = () => {
  // isValid: true (valid), false (invalid), null (default - input field is empty)
  const [isValid, setIsValid] = useState(null);

  const validate = (value, validateFn) => {
    const result = validateFn(value);
    setIsValid(result);
    return result;
  };

  const reset = () => {
    setIsValid(null);
  };

  return {
    isValid,
    validate,
    reset,
  };
};

export default useValidation;
