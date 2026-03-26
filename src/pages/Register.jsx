import { useNavigate } from "react-router";
import useField from "../hooks/useField";
import useValidation from "../hooks/useValidation";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import AuthForm from "../components/AuthForm";

const MIN_LENGTH = 8;

const submitButtonConfig = {
  buttonName: "Create Account",
};

const formFooterConfig = {
  description: "Already have an account?",
  to: "/login",
  actionText: "Login",
};

const validateName = (name) => {
  return name.trim().length > 0;
};

const validateEmail = (email) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email.trim());
};

const validatePassword = (password) => {
  return password.trim().length >= MIN_LENGTH;
};

const Register = () => {
  const navigate = useNavigate();

  const nameValidation = useValidation();
  const emailValidation = useValidation();
  const passwordValidation = useValidation();

  const name = useField(nameValidation.reset);
  const email = useField(emailValidation.reset);
  const password = useField(passwordValidation.reset);

  const onSubmit = (e) => {
    e.preventDefault();

    // For register, we validate the field values' formats before submitting to backend.
    const isNameValid = nameValidation.validate(name.value, validateName);
    const isEmailValid = emailValidation.validate(email.value, validateEmail);
    const isPasswordValid = passwordValidation.validate(
      password.value,
      validatePassword,
    );

    if (!isNameValid || !isEmailValid || !isPasswordValid) return;

    // TODO: Sending form data to backend to verify and register.
    navigate("/login");
  };

  return (
    <AuthForm
      formTitle="Sign Up"
      submitButtonConfig={submitButtonConfig}
      formFooterConfig={formFooterConfig}
      onSubmit={onSubmit}
    >
      <TextInput
        id="register-name"
        type="text"
        labelTitle="Name"
        name="name"
        placeholder="Enter your name"
        autoComplete="name"
        {...name}
        isValid={nameValidation.isValid}
      />
      <TextInput
        id="register-email"
        type="email"
        labelTitle="Email"
        name="email"
        placeholder="Enter your email"
        autoComplete="username"
        {...email}
        isValid={emailValidation.isValid}
      />
      <PasswordInput
        helperText="Passwords must be at least 8 characters"
        id="register-password"
        type="password"
        labelTitle="Create Password"
        name="password"
        placeholder="Enter your password"
        autoComplete="new-password"
        {...password}
        isValid={passwordValidation.isValid}
      />
    </AuthForm>
  );
};

export default Register;
