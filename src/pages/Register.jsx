import { useState } from "react";
import { useNavigate } from "react-router";
import useField from "../hooks/useField";
import useValidation from "../hooks/useValidation";
import useModal from "../hooks/useModal";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import AuthForm from "../components/AuthForm";
import FormWrapper from "../components/FormWrapper";
import Modal from "../components/Modal";
import FormButton from "../components/FormButton";
import modalLogo from "../assets/images/icon-close-modal.svg";

const MIN_PASSWORD_LENGTH = 8;

const formButtonConfig = {
  buttonName: "Create Account",
  loadingName: "Creating Account...",
  type: "submit",
};

const formFooterConfig = {
  description: "Already have an account?",
  to: "/login",
  actionText: "Login",
};

const modalConfig = {
  button: {
    buttonName: "Login",
    type: "button",
  },
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
  return password.trim().length >= MIN_PASSWORD_LENGTH;
};

const Register = () => {
  const navigate = useNavigate();

  const nameValidation = useValidation();
  const emailValidation = useValidation();
  const passwordValidation = useValidation();

  const name = useField(nameValidation.reset);
  const email = useField(emailValidation.reset);
  const password = useField(passwordValidation.reset);

  const [showModal, handleOpen, handleClose, modalRef] = useModal();

  const [isLoading, setIsLoading] = useState(false);

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

    // Show loading text, disable register button while waiting for the server validation
    setIsLoading(true);

    // TODO: Sending form data to backend to verify and register.
    // - Only the new user is able to register.
    // - If email already exist in server side, deemed as invalid.
    // - Only open the modal when the registration has been verified and succeeded.
    setTimeout(() => {
      handleOpen();
      setIsLoading(false);
    }, 3000);
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <>
      <FormWrapper>
        <AuthForm
          formTitle="Sign Up"
          formButtonConfig={formButtonConfig}
          formFooterConfig={formFooterConfig}
          onSubmit={onSubmit}
          isLoading={isLoading}
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
      </FormWrapper>
      <Modal
        modalRef={modalRef}
        showModal={showModal}
        handleClose={handleClose}
      >
        {/* Modal Content */}
        <div className="relative space-y-250 p-200">
          <h2 className="text-preset-2 md:text-preset-1">Welcome aboard!</h2>
          <p className="text-preset-4 text-grey-500">
            Your account has been created successfully. You're all set to start
            managing your finances.
          </p>
          <FormButton {...modalConfig.button} onClick={handleNavigate} />
          <button
            className="absolute right-0 top-0 cursor-pointer"
            type="button"
            onClick={handleClose}
          >
            <img src={modalLogo} alt="Close modal" />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Register;
