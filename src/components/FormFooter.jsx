import { Link } from "react-router";

const FormRedirectLink = ({ description, to, actionText }) => {
  return (
    <p className="text-preset-4 text-center text-grey-500 mt-400">
      <span className="pr-100">{description}</span>
      <Link
        className="inline-block text-preset-4-bold text-grey-900 underline"
        to={to}
      >
        {actionText}
      </Link>
    </p>
  );
};

export default FormRedirectLink;
