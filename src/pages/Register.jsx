import { useNavigate } from "react-router";
import useField from "../hooks/useField";
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

const Register = () => {
  const email = useField();
  const name = useField();
  const password = useField(
    (val) => val.length === 0 || val.length >= MIN_LENGTH,
  );

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: Sending form data to backend to verify and register.
    console.log(email.value, name.value, password.value);

    // Redirect to /login.
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
        required={true}
        {...name}
      />
      <TextInput
        id="register-email"
        type="email"
        labelTitle="Email"
        name="email"
        placeholder="Enter your email"
        autoComplete="username"
        required={true}
        {...email}
      />
      <PasswordInput
        helperText="Passwords must be at least 8 characters"
        id="register-password"
        type="password"
        labelTitle="Create Password"
        name="password"
        placeholder="Enter your password"
        autoComplete="new-password"
        required={true}
        {...password}
      />
    </AuthForm>
  );
};

export default Register;
