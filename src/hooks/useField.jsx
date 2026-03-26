import { useState } from "react";

const useField = (validate) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    if (typeof validate === "function") {
      setIsValid(validate(val));
    }
  };

  return {
    value,
    isValid,
    onChange: handleChange,
  };
};

export default useField;
