import FormButton from "./FormButton";
import FormFooter from "../components/FormFooter";
const AuthForm = ({
  onSubmit,
  formTitle,
  children,
  formButtonConfig,
  formFooterConfig,
  isLoading,
}) => {
  return (
    <form className="m-200 space-y-200" onSubmit={onSubmit}>
      <h1 className="text-preset-1 mb-400">{formTitle}</h1>
      {/* Children is supposed to be input element / components */}
      {children}
      <FormButton {...formButtonConfig} isLoading={isLoading} />
      <FormFooter {...formFooterConfig} />
    </form>
  );
};

export default AuthForm;
