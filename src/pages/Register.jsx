import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import AuthForm from "../components/AuthForm";

const submitButtonConfig = {
  buttonName: "Create Account",
};

const formFooterConfig = {
  description: "Already have an account?",
  to: "/login",
  actionText: "Login",
};

const Register = () => {
  return (
    <AuthForm
      formTitle="Sign Up"
      submitButtonConfig={submitButtonConfig}
      formFooterConfig={formFooterConfig}
    >
      <TextInput
        id="register-name"
        type="text"
        labelTitle="Name"
        name="name"
        placeholder="Enter your name"
        autoComplete="name"
        required={true}
      />
      <TextInput
        id="register-email"
        type="email"
        labelTitle="Email"
        name="email"
        placeholder="Enter your email"
        autoComplete="email"
        required={true}
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
      />
    </AuthForm>
  );
};

export default Register;
