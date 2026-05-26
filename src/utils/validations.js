import { DECIMAL_NUMBER_REGEX, EMAIL_REGEX } from "../constants/regexp";
import { MAX_POT_NAME_LENGTH } from "../constants/pot";
import { MIN_PASSWORD_LENGTH } from "../constants/register";

/* GENERIC */

const validateNonEmpty = (value) => value.trim().length > 0;

const validateDecimal = (value) => DECIMAL_NUMBER_REGEX.test(value);

const validatePositiveNumber = (value) => Number(value) > 0;

/* AUTH */

const validateEmail = (email) => EMAIL_REGEX.test(email.trim());

const validatePassword = (password) => {
  return password.trim().length >= MIN_PASSWORD_LENGTH;
};

/* POTS */
const validatePotName = (potName) =>
  validateNonEmpty(potName) && potName.length <= MAX_POT_NAME_LENGTH;

export {
  validateDecimal,
  validateNonEmpty,
  validatePositiveNumber,
  validateEmail,
  validatePassword,
  validatePotName,
};
