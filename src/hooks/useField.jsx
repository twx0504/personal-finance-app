import { useState } from "react";

const useField = (onChange) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value.trim();
    setValue(val);
    
    if (typeof onChange === "function") {
      onChange(val);
    }
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useField;
