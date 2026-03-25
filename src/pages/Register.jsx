import { Link } from "react-router";
/* Finish Responsiveness */
/* Refactor Input */
/* Refactor Form */
/* Implement basic logic */

import eyeIcon from "../assets/images/icon-show-password.svg";
const Register = () => {
  return (
    <form className="bg-white p-400 m-200 mt-0 md:w-140 rounded-lg">
      <h1 className="text-preset-1 mb-400">Sign Up</h1>
      <div className="mb-200 ">
        <label
          className="text-preset-5-bold text-grey-500"
          htmlFor="register-name"
        >
          Name
        </label>
        <div className="relative">
          <input
            id="register-name"
            className="text-preset-4-bold block mt-50 peer w-full h-11.25 border border-beige-500 rounded-md pt-150 pb-150 pl-250 pr-250"
            type="text"
            name="name"
            placeholder="Name"
            required
            autoComplete="name"
          />
        </div>
      </div>
      <div className="mb-200">
        <label
          className="text-preset-5-bold text-grey-500"
          htmlFor="register-email"
        >
          Email
        </label>
        <div className="relative">
          <input
            id="register-email"
            className="text-preset-4 block mt-50 peer w-full h-11.25 border border-beige-500 rounded-md pt-150 pb-150 pl-250 pr-250"
            type="email"
            name="email"
            placeholder="Email"
            required
            autoComplete="email"
          />
        </div>
      </div>
      <div className="mb-400">
        <label
          className="text-preset-5-bold text-grey-500"
          htmlFor="register-password"
        >
          Create Password
        </label>
        <div className="relative">
          <input
            id="register-password"
            className="text-preset-4 block mt-50 peer w-full h-11.25 border border-beige-500 rounded-md pt-150 pb-150 pl-250 pr-500"
            type="password"
            name="password"
            placeholder="Create password"
            required
            autoComplete="new-password"
          />
          <p className="text-preset-5 text-right mt-50 text-grey-500">
            Passwords must be at least 8 characters
          </p>
          <button
            type="button"
            className="w-200 h-200 absolute right-200 top-[50%] -translate-y-1/2 cursor-pointer"
            aria-label="Show password"
          >
            <img className="w-200 h-200" src={eyeIcon} alt="" />
          </button>
        </div>
      </div>
      <button className="text-preset-4 block w-full mb-400 bg-grey-900 text-white h-13.25 rounded-md cursor-pointer">
        Create Account
      </button>
      <p className="text-preset-4 text-center text-grey-500">
        <span className="pr-100">Already have an account?</span>
        <Link
          className="inline-block text-preset-4-bold text-grey-900 underline"
          to="/login"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
