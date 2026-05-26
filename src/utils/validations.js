import { DECIMAL_NUMBER_REGEX } from "../constants/regexp";
import { MAX_POT_NAME_LENGTH } from "../constants/pot";

/* GENERIC */

const validateNonEmpty = (amount) => amount !== "";

const validateDecimal = (value) => DECIMAL_NUMBER_REGEX.test(value);

const validatePositiveNumber = (value) => Number(value) > 0;

/* AUTH */

/* POTS */
const validatePotName = (potName) =>
  validateNonEmpty(potName) && potName.length <= MAX_POT_NAME_LENGTH;

export {
  validateDecimal,
  validateNonEmpty,
  validatePositiveNumber,
  validatePotName,
};
