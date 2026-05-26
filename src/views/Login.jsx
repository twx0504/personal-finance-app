import { useState } from "react";
import useField from "../hooks/useField";
import useValidation from "../hooks/useValidation";
import TextInput from "../components/ui/TextInput";
import PasswordInput from "../components/auth/PasswordInput";
import AuthForm from "../components/auth/AuthForm";
import { formButtonConfig, formFooterConfig } from "../constants/login";
import { validateNonEmpty } from "../utils/validations";


const Login = ({ setIsLoggedIn }) => {
  const emailValidation = useValidation();
  const passwordValidation = useValidation();

  const email = useField("", emailValidation.reset);
  const password = useField("", passwordValidation.reset);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // For login, we only check for non-empty field.
    // The authentication will be handled by backend to give access to the app.
    const isEmailValid = emailValidation.validate(email.value, validateNonEmpty);
    const isPasswordValid = passwordValidation.validate(
      password.value,
      validateNonEmpty,
    );

    if (!isEmailValid || !isPasswordValid) return;
    setIsLoading(true);
    // TODO: Sending form data to backend to verify and login.
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  };

  return (
    <div className="w-9/10 bg-white p-200  mt-0 md:w-140 rounded-lg">
      <AuthForm
        formTitle="Login"
        formButtonConfig={formButtonConfig}
        formFooterConfig={formFooterConfig}
        onSubmit={onSubmit}
        isLoading={isLoading}
        formId="login-form"
      >
        <TextInput
          id="login-email"
          labelTitle="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="username"
          value={email.value}
          onChange={email.onChange}
          isValid={emailValidation.isValid}
        />
        <div className="pb-200">
          <PasswordInput
            id="login-password"
            labelTitle="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password.value}
            onChange={password.onChange}
            isValid={passwordValidation.isValid}
          />
        </div>
      </AuthForm>
    </div>
  );
};

export default Login;
