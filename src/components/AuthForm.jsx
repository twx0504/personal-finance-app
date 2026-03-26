import SubmitButton from "../components/SubmitButton";
import FormFooter from "../components/FormFooter";
const AuthForm = ({
  onSubmit,
  formTitle,
  children,
  submitButtonConfig,
  formFooterConfig,
}) => {
  return (
    <form
      className="w-9/10 bg-white pl-250 pr-250 pt-300 pb-300 m-200 mt-0 md:w-140 rounded-lg space-y-200"
      onSubmit={onSubmit}
    >
      <h1 className="text-preset-1 mb-400">{formTitle}</h1>
      {/* Children is supposed to be input element / components */}
      {children}
      <SubmitButton {...submitButtonConfig} />
      <FormFooter {...formFooterConfig} />
    </form>
  );
};

export default AuthForm;
