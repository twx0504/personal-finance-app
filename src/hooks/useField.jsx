import { useState } from "react";

const useField = (initialValue, onChange) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const val = e.target.value.trim();
    setValue(val);

    if (typeof onChange === "function") {
      onChange(val);
    }
  };

  const reset = (value = "") => setValue(value);

  return {
    value,
    onChange: handleChange,
    reset,
  };
};

export default useField;
