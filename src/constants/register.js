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

export { MIN_PASSWORD_LENGTH, formButtonConfig, formFooterConfig, modalConfig };
