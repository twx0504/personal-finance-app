import useField from "../hooks/useField";
import useValidation from "../hooks/useValidation";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import AuthForm from "../components/AuthForm";

const submitButtonConfig = {
  buttonName: "Login",
};

const formFooterConfig = {
  description: "Need to create an account?",
  to: "/register",
  actionText: "Sign Up",
};

const isNotEmpty = (val) => {
  return val.trim().length > 0;
};

const Login = ({ setIsLoggedIn }) => {
  const emailValidation = useValidation();
  const passwordValidation = useValidation();

  const email = useField(emailValidation.reset);
  const password = useField(passwordValidation.reset);

  const onSubmit = (e) => {
    e.preventDefault();

    // For login, we only check for non-empty field.
    // The authentication will be handled by backend to give access to the app.
    const isEmailValid = emailValidation.validate(email.value, isNotEmpty);
    const isPasswordValid = passwordValidation.validate(
      password.value,
      isNotEmpty,
    );

    if (!isEmailValid || !isPasswordValid) return;

    // TODO: Sending form data to backend to verify and login.
    setIsLoggedIn(true);
  };

  return (
    <AuthForm
      formTitle="Login"
      submitButtonConfig={submitButtonConfig}
      formFooterConfig={formFooterConfig}
      onSubmit={onSubmit}
    >
      <TextInput
        id="login-email"
        labelTitle="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        autoComplete="username"
        {...email}
        isValid={emailValidation.isValid}
      />
      <PasswordInput
        id="login-password"
        labelTitle="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        autoComplete="current-password"
        {...password}
        isValid={passwordValidation.isValid}
      />
    </AuthForm>
  );
};

export default Login;
