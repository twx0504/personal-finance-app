const getBorderColor = (isValid) => {
  if (isValid === null || isValid === undefined) {
    return "outline-grey-900 border-beige-500";
  }
  return isValid ? "outline-green border-green" : "outline-red border-red";
};

const getHelperTextColor = (isValid) => {
  if (isValid === null) {
    return "text-grey-500";
  }
  return isValid ? "text-green" : "text-red";
};

export { getBorderColor, getHelperTextColor };
