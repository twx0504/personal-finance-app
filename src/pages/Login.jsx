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

const Login = () => {
  return (
    <AuthForm
      formTitle="Login"
      submitButtonConfig={submitButtonConfig}
      formFooterConfig={formFooterConfig}
    >
      <TextInput
        id="login-email"
        labelTitle="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        autoComplete="email"
        required={true}
      />
      <PasswordInput
        id="login-password"
        labelTitle="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        autoComplete="current-password"
        required={true}
      />
    </AuthForm>
  );
};

export default Login;
