import useField from "../hooks/useField";
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

const Login = ({ setIsLoggedIn }) => {
  const email = useField();
  const password = useField();

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: Sending form data to backend to verify and login.
    console.log(email.value, password.value);
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
        required={true}
        {...email}
      />
      <PasswordInput
        id="login-password"
        labelTitle="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        autoComplete="current-password"
        required={true}
        {...password}
      />
    </AuthForm>
  );
};

export default Login;
