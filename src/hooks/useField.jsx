import { useState } from "react";

const useField = (initialValue, onChange) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    // The problem with trim() disallows us to type space between words e.g., Colorful Rainbow.
    // trimStart() allows it, but if we want to trim the leading and trailing space, we need to do it during submit.
    const val = e.target.value.trimStart();
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
